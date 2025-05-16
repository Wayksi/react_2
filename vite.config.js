import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': resolve(__dirname, 'src/components'),
      '@ui': resolve(__dirname, 'src/components/ui'),
      '@layout': resolve(__dirname, 'src/components/layout'),
      '@blocks': resolve(__dirname, 'src/components/blocks'),
      '@pages': resolve(__dirname, 'src/components/pages'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@mocks': resolve(__dirname, 'src/mocks'),
    },
  },
});
