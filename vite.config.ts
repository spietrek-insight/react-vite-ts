import path from 'path'
import { VitePWA } from 'vite-plugin-pwa'
import { configDefaults, defineConfig } from 'vitest/config'

import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets: ['favicon.ico', 'robots.txt'],
      registerType: 'prompt',
      injectRegister: false,
      manifest: {
        name: 'Wink',
        short_name: 'WinkTouch',
        description: 'WinkTouch',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },
      devOptions: {
        enabled: false,
        navigateFallback: 'index.html',
        suppressWarnings: true,
        type: 'module',
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    open: true,
    port: 4444,
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './src/setupTest.ts',
    // include all test files (*.test.ts or *.test.tsx) in any __tests__ folder in the main src directory
    include: ['**/__tests__/**/*.?(test).[jt]s?(x)'],
    exclude: [
      ...configDefaults.exclude,
      '**/data/**',
      '**/images/**',
      '**/src/e2e/**',
      '**/src/stories/**',
      'packages/template/**',
    ],
  },
})
