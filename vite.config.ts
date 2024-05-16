import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@assets': path.resolve(__dirname, './src/assets/'),
      '@components': path.resolve(__dirname, './src/components/'),
      '@layout': path.resolve(__dirname, './src/layout/'),
      '@pages': path.resolve(__dirname, './src/pages/'),
      '@store': path.resolve(__dirname, './src/store/'),
      '@ts': path.resolve(__dirname, './src/ts/'),
    },
  },
});

