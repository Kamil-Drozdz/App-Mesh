import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
	plugins: [
		react(),
		viteCompression({
			verbose: true,
			disable: false,
			algorithm: 'brotliCompress',
			ext: '.br',
		}),
	],
	build: {
		sourcemap: true,
		minify: 'terser',
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
});
