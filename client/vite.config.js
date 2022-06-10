import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteAliases } from 'vite-aliases'
import * as path from 'path'
// https://vitejs.dev/config/

export default defineConfig({
  
  resolve: {
    alias: {
      pages: path.resolve(__dirname, 'src/pages/'),
        pages_account: path.resolve(__dirname, 'src/pages/account'),
        pages_dashboard: path.resolve(__dirname, 'src/pages/dashboard'),
        pages_users: path.resolve(__dirname, 'src/pages/users'),
      components: path.resolve(__dirname, 'src/components/'),
      validateForm: path.resolve(__dirname, 'src/validateForm/'),
      reducers: path.resolve(__dirname, 'src/reducers/'),
      layouts: path.resolve(__dirname, 'src/layouts/'),

    },
  },
  plugins: 
  [react()]
  
})
