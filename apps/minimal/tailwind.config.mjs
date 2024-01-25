const defaultTheme = require('tailwindcss/defaultTheme')
// const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
	// darkMode: ['class', '[data-mode="dark"]'],
	darkMode: ['class'],
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/@astrokit/**/*.astro',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter Variable', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				'font-color': 'var(--font-color)',
				'background-color': 'var(--background-color)',
			},
		},
	},
	plugins: [],
}
