import { defineConfig } from 'astro/config'
import icon from 'astro-icon'

export default defineConfig({
	integrations: [
		icon({
			iconDir: 'src/assets/icons',
			include: {
				heroicons: ['sun', 'moon'],
			},
		}),
	],
})
