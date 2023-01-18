import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config();
import dns from 'dns';
import csp from 'vite-plugin-csp';

dns.setDefaultResultOrder('verbatim');

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5000,
  },
  define: {
    __SERVER_PORT__: process.env.SERVER_PORT,
  },
  ssr: {
    target: 'node',
    format: 'cjs',
  },
  plugins: [react(), csp()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        app: './index.html',
        'service-worker': './sw.ts',
      },
    },
  },
});
