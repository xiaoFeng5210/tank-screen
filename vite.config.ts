import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
      "~/components": path.resolve(__dirname, "src/components"),
      "~/styles": path.resolve(__dirname, "src/styles"),
      "~/pages": path.resolve(__dirname, "src/pages"),
      "~/utils": path.resolve(__dirname, "src/utils"),
    }
  },
  server: {
    proxy: {
      "/api": {
        target: "http://192.168.4.56:8092/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
})
