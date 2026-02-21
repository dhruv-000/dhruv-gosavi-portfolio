import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Workaround for Windows ACLs where node_modules is not writable.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/portfolio/' : '/',
  cacheDir: '.vite-cache',
}))
