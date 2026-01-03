import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  fontFamily: {
    // handwriting: ['"Patrick Hand"', 'cursive'],
    handwriting: ['YourHandwrittenFont', 'cursive'],
  },
  base: "/udharkhata/", // 👈 repo name here
})
