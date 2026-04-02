import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: '.',
  plugins: [react()],
  server: {
    allowedHosts: true,
    host: true,
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
})
