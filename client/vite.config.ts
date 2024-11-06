// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Export the configuration using defineConfig
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // specify the desired port
  },
  define: {
    'process.env': process.env, // Allow using process.env in your code
  },
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@import "src/styles/variables.scss";`, // Example for SASS
      },
    },
  },
});