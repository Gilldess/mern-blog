import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  //  untuk mengatur localhost backend dan frontend yg berbeda, agar datanya di kirim ke localhost backend
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
      },
  },},
  plugins: [react(),]
})