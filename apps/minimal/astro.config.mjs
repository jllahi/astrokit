import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'
import debugCss from '@astrokit/debug-css'
import { tailwindConfigViewer } from '@astrokit/tailwind-config-viewer'
import metaTags from 'astro-meta-tags'
// import mkcert from 'vite-plugin-mkcert'

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind(),
		icon(),
		// icon({
		// 	iconDir: 'src/assets/icons',
		// 	include: {
		// 		heroicons: ['sun', 'moon'],
		// 	},
		// }),
		debugCss(),
		tailwindConfigViewer(),
		metaTags(),
	],
	// vite: {
	// 	plugins: [mkcert()],
	// },
})
