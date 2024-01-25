import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // jest config here
    reporters: ['verbose']
  },
  // reporter: [{ formatter: 'verbose', logLevel: 4 }]
})
