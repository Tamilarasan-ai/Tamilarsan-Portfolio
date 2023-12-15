import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import reactRefresh from '@vitejs/plugin-react-refresh';

dotenv.config();

export default defineConfig({
  plugins: [react()
    ,reactRefresh()],
  server: {
    host: true,
  },
  define: {
    'tsparticles': 'tsparticles/dist/tsparticles.esm',
 },
});
