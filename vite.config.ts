import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Configuracion de rutas
  resolve:{
    alias: {
      '@components': '/src/styles/components', // Ruta de estilos
      '@molecules': '/src/styles/molecules',
      '@pages': '/src/styles/pages',
    }
  },

  // Configuracion de servidor
  server: {
    host: '0.0.0.0',
    port: 5173,
    cors: true,
    hmr:{
      host: '172.30.158.100'
    },
    allowedHosts:[
      '172.30.158.100'
    ]
  },
})
