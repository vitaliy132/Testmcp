import { createReadStream, existsSync, statSync, cpSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig, type Connect, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const rootDir = path.dirname(fileURLToPath(import.meta.url))
const projectsDir = path.resolve(rootDir, 'projects')

const MIME: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
}

function serveProjectSites(): Plugin {
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
      res.setHeader('Content-Type', MIME['.html'])
      createReadStream(index).pipe(res)
      return
    }

    if (!existsSync(abs) || !statSync(abs).isFile()) {
      next()
      return
    }

    res.setHeader('Content-Type', MIME[path.extname(abs).toLowerCase()] ?? 'application/octet-stream')
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
    closeBundle() {
      cpSync(projectsDir, path.resolve(rootDir, 'dist/projects'), { recursive: true })
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), serveProjectSites()],
  resolve: {
    alias: {
      '@': path.resolve(rootDir, 'src'),
    },
  },
})
