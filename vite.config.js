import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Listen on all IPv4 addresses
    port: 5173,
    allowedHosts: [
      '.matter.jetbrains.ai',
      '.matter.labs.jb.gg',
      'localhost',
      '127.0.0.1',
      '0.0.0.0'
    ], // Allow specific hosts including the matter domain
  },
})
