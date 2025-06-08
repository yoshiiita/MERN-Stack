import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: { // which means whenever we visit /api it will prefix with
      "/api": {
        target: "http://localhost:5000",
      }
    }
  }
})
