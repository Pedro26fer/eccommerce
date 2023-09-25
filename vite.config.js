import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import FontsPlugin from 'vite-plugin-fonts';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    FontsPlugin({
      google: {
        families: ['Open Sans', 'Roboto', 'Roboto Condensed','Barlow'], 
      },
    }),
  ],
})
