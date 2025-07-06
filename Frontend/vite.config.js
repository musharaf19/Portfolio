import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // Ensures relative paths for deployment
  build: {
    outDir: 'dist', // Optional: default is 'dist'
  }
})
