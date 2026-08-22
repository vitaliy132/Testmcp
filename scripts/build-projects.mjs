import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync,
} from 'node:fs'
import { cpSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import * as esbuild from 'esbuild'

const SKIP_COPY_EXT = new Set(['.ts', '.js', '.json', '.mjs'])

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const projectsDir = path.resolve(rootDir, 'projects')
const destDir = path.resolve(rootDir, 'public/projects')

async function bundleEntry(entry) {
  const result = await esbuild.build({
    absWorkingDir: path.dirname(entry),
    entryPoints: [entry],
    bundle: true,
    format: 'esm',
    platform: 'browser',
    target: ['es2022'],
    write: false,
    sourcemap: false,
    logLevel: 'silent',
  })
  const file = result.outputFiles[0]
  if (!file) throw new Error(`esbuild produced no output for ${entry}`)
  return file.text
}

function rewriteProjectHtml(html) {
  return html.replaceAll('./app.ts', './app.js')
}

function copyProjectAssets() {
  cpSync(projectsDir, destDir, {
    recursive: true,
    filter: (source) => {
      const rel = path.relative(projectsDir, source)
      if (!rel || rel === '.') return true
      const parts = rel.split(path.sep)
      if (parts[0] === 'shared') return false
      if (path.basename(source) === 'tsconfig.json') return false
      const ext = path.extname(source).toLowerCase()
      if (SKIP_COPY_EXT.has(ext)) return false
      return true
    },
  })
}

function collectAppEntries(dir, found = []) {
  for (const name of readdirSync(dir)) {
    const abs = path.join(dir, name)
    const stat = statSync(abs)
    if (stat.isDirectory()) {
      if (name === 'shared' || name === 'images') continue
      collectAppEntries(abs, found)
      continue
    }
    if (name === 'app.ts') found.push(abs)
  }
  return found
}

function rewriteCopiedHtml(dir) {
  for (const name of readdirSync(dir)) {
    const abs = path.join(dir, name)
    if (statSync(abs).isDirectory()) {
      rewriteCopiedHtml(abs)
      continue
    }
    if (!name.endsWith('.html')) continue
    const html = readFileSync(abs, 'utf8')
    const next = rewriteProjectHtml(html)
    if (next !== html) writeFileSync(abs, next)
  }
}

if (existsSync(destDir)) rmSync(destDir, { recursive: true, force: true })
mkdirSync(destDir, { recursive: true })
copyProjectAssets()

for (const entry of collectAppEntries(projectsDir)) {
  const rel = path.relative(projectsDir, entry)
  const outFile = path.join(destDir, rel.replace(/\.ts$/, '.js'))
  mkdirSync(path.dirname(outFile), { recursive: true })
  writeFileSync(outFile, await bundleEntry(entry))
}

rewriteCopiedHtml(destDir)
console.log(`Built client demos → ${path.relative(rootDir, destDir)}`)
