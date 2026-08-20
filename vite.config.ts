import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { serveProjectSites } from './vite/serve-projects.ts'

const rootDir = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react(), tailwindcss(), serveProjectSites(rootDir)],
  resolve: {
    alias: {
      '@': path.resolve(rootDir, 'src'),
    },
  },
})
