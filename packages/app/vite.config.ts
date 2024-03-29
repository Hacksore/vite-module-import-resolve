import { defineConfig } from "vite";
import { Plugin } from "plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Plugin()],
  base: "./",
  build: {
    rollupOptions: {
      input: {
        lolEntry: "src/main.ts",
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  }
});
