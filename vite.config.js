import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Lomdei-2025/', // This is correct for GitHub Pages project sites
  build: {
    outDir: 'docs' // This will output your build to the docs folder
  }
})
