import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react()], // Use the Vite React plugin
  test: {
    environment: 'jsdom', // Use jsdom for React testing
    globals: true, // Enable global variables like `describe`, `test`, etc.
    setupFiles: './client/src/test/setup.js', // Optional: Add a setup file
  },
});