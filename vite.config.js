import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from 'tailwindcss'
import { defineConfig } from 'vite'
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	css: {
		postcss: {
			plugins: [tailwindcss()],
		},
	},

	resolve: {
		alias: {
			'@assets': path.resolve(__dirname, './src/assets'),
			'@services': path.resolve(__dirname, './src/services'),
			'@utils': path.resolve(__dirname, './src/utils'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@routes': path.resolve(__dirname, './src/routes'),
			'@common': path.resolve(__dirname, './src/common'),
			'@useContext': path.resolve(__dirname, './src/context'),
			'@constants': path.resolve(__dirname, './src/constants'),
		},
	},
})
