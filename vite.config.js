import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base is '/portfolio/' only for production (GitHub Pages), '/' locally
export default defineConfig(({ command }) => ({
    plugins: [react()],
    base: command === 'build' ? '/portfolio/' : '/',
}))
