import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    coverage: {
      reporter: ['text', 'html'],
      exclude: [
        '**/index.mjs', // Exclude all index.mjs files from coverage
        '**/node_modules/**', // default exclusion
        '**/test/**' // optional: exclude test files
      ]
    }
  }
});
