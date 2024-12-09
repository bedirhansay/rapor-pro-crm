import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@layout': path.resolve(__dirname, 'src/layout'),
      '@middleware': path.resolve(__dirname, 'src/lib/middleware'),
      '@utils': path.resolve(__dirname, 'src/lib/utils'),
      '@hooks': path.resolve(__dirname, 'src/lib/hooks'),
      '@helper': path.resolve(__dirname, 'src/lib/helper'),
    },
  },
});
