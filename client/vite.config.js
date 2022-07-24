import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { 
    proxy: {
      '/graphql':'http://localhost:3001'
     },
     "root": "./dist",
     "clean_urls": true,
     "routes": {
       "/**": "index.html"
     }
  },
  
  })
