import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), svgr()],
  base: "personal-page",
  server: {
    port: 3000,
    strictPort: true,
  }
})
