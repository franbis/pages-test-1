import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



console.log('VITE_BASE:', process.env.VITE_BASE);

// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
})
