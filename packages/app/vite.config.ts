import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { Plugin } from "plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Plugin()],
  base: "./",
  build: {
    rollupOptions: {
      input: {
        lolEntry: 'src/main.tsx'
      }
    }
  }
})
