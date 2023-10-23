import react from '@vitejs/plugin-react';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import { PluginOption, defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import Svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    Svgr(),
    react(),
    visualizer({
      template: 'treemap',
      gzipSize: true,
      brotliSize: true,
    }) as PluginOption,

    viteCompression({
      verbose: true,
      disable: false,
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
  ],
  build: {
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-chunk': ['react', 'react-dom', 'react-router-dom'],
          'fullcalendar-chunk': [
            '@fullcalendar/core',
            '@fullcalendar/daygrid',
            '@fullcalendar/interaction',
            '@fullcalendar/react',
          ],
          'radixui-chunk': [
            '@radix-ui/react-popover',
            '@radix-ui/react-radio-group',
            '@radix-ui/react-select',
            '@radix-ui/react-separator',
            '@radix-ui/react-slot',
            '@radix-ui/react-tooltip',
          ],
          'data-fetching-chunk': ['axios', 'date-fns'],
          'ui-chunk': [
            'react-beautiful-dnd',
            'react-loader-spinner',
            'react-toastify',
            'react-transition-group',
            'chart.js',
            'react-icons',
            'tailwindcss-animate',
          ],
          'utility-chunk': [
            'lodash',
            'uuid',
            'zustand',
            'zod',
            'firebase/app',
            'firebase/analytics',
            'firebase/auth',
            'firebase/firestore',
            'firebase/performance',
            'i18next',
            'jspdf',
          ],
          'faker-chunk': ['faker', '@faker-js/faker'],
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
