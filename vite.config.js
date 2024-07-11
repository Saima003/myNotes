// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  // Other Vite configuration options
});

