// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
    server: {
        port: 3000,
    },
    base: '/majid-portfolio/',
    build: {
        outDir: 'dist',
    },
})
