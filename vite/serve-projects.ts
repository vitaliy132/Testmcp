import {
  createReadStream,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from 'node:fs'
import { cpSync } from 'node:fs'
import path from 'node:path'
import * as esbuild from 'esbuild'
import type { Connect, Plugin } from 'vite'

const MIME: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.mp4': 'video/mp4',
}

const SKIP_COPY_EXT = new Set(['.ts', '.js', '.json', '.mjs'])

async function bundleEntry(entry: string) {
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

function rewriteProjectHtml(html: string) {
  return html.replaceAll('./app.ts', './app.js')
}

function copyProjectAssets(projectsDir: string, destDir: string) {
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

function collectAppEntries(dir: string, found: string[] = []) {
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

function rewriteCopiedHtml(dir: string) {
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

export function serveProjectSites(rootDir: string): Plugin {
  const projectsDir = path.resolve(rootDir, 'projects')

  const middleware: Connect.NextHandleFunction = (req, res, next) => {
    const raw = req.url?.split('?')[0] ?? ''
    if (raw !== '/projects' && !raw.startsWith('/projects/')) {
      next()
      return
    }

    const rel = decodeURIComponent(raw.replace(/^\/projects\/?/, ''))
    if (!rel) {
      res.statusCode = 404
      res.end('Not found')
      return
    }

    const abs = path.resolve(projectsDir, rel)
    if (path.relative(projectsDir, abs).startsWith('..')) {
      res.statusCode = 403
      res.end()
      return
    }

    if (existsSync(abs) && statSync(abs).isDirectory()) {
      if (!raw.endsWith('/')) {
        res.statusCode = 302
        res.setHeader('Location', `${raw}/`)
        res.end()
        return
      }
      const index = path.join(abs, 'index.html')
      if (!existsSync(index)) {
        next()
        return
      }
      res.setHeader('Content-Type', MIME['.html'] ?? 'text/html; charset=utf-8')
      createReadStream(index).pipe(res)
      return
    }

    if (!existsSync(abs) || !statSync(abs).isFile()) {
      next()
      return
    }

    if (path.extname(abs).toLowerCase() === '.ts') {
      void bundleEntry(abs)
        .then((code) => {
          res.setHeader('Content-Type', MIME['.js'] ?? 'text/javascript; charset=utf-8')
          res.end(code)
        })
        .catch(() => {
          res.statusCode = 500
          res.end('Failed to compile project script')
        })
      return
    }

    res.setHeader(
      'Content-Type',
      MIME[path.extname(abs).toLowerCase()] ?? 'application/octet-stream',
    )
    createReadStream(abs).pipe(res)
  }

  return {
    name: 'serve-project-sites',
    configureServer(server) {
      server.middlewares.use(middleware)
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware)
    },
    async closeBundle() {
      const destDir = path.resolve(rootDir, 'dist/projects')
      mkdirSync(destDir, { recursive: true })
      copyProjectAssets(projectsDir, destDir)

      for (const entry of collectAppEntries(projectsDir)) {
        const rel = path.relative(projectsDir, entry)
        const outFile = path.join(destDir, rel.replace(/\.ts$/, '.js'))
        mkdirSync(path.dirname(outFile), { recursive: true })
        writeFileSync(outFile, await bundleEntry(entry))
      }

      rewriteCopiedHtml(destDir)
    },
  }
}
