import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/openapi/": {
        target: "http://182.44.68.188:30580",
        changeOrigin: true,
      },
      "/api/": {
        target: "https://test-ymsl.kxgcc.com:30195",
        changeOrigin: true,
      },
      "/public/": {
        target: "https://uat.kxgcc.com",
        changeOrigin: true,
      },
      "/cms-static/": {
        target: "https://test-ymsl.kxgcc.com:30195",
        changeOrigin: true,
      },
    },
  },
  optimizeDeps: {
    include: ["lodash-es"],
  },
});
