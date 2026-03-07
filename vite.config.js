import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://abrahamvelasquez.github.io/proyecto_ow_Prueba/', // ¡Ojo! Pon el nombre exacto de tu repo en GitHub
})
