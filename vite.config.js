import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@modules": path.resolve(__dirname, "src/modules"),
      "@core": path.resolve(__dirname, "src/core"),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
