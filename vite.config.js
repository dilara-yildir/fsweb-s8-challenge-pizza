import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Tarayıcıyı otomatik açar
    hmr: true,  // Hot Module Replacement
  },
  base: '/', // Kök dizini belirtir
})
