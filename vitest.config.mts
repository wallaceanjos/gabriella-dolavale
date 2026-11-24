import { defineConfig } from 'vitest/config'
import path from 'node:path'

// Same setup as atrios/impulso: pure-function tests in lib/, no browser.
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, '.'),
    },
  },
  test: {
    include: ['lib/**/*.test.ts'],
    environment: 'node',
  },
})
