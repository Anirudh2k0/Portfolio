import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }]
  },
  build:{
    minify: false,
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    fs: {
      cachedChecks: false
    }
  }
})
