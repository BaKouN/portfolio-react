import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

/** @type {import('vite').UserConfig} */

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
  plugins: [react()],
})
