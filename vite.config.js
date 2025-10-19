import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Lomdei-2025/', // must exactly match repo name
  plugins: [react()],
  build: {
    outDir: 'docs' // This will output your build to the docs folder
  }
});
