/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'logo': ["Bacasime Antique", "Amatic SC"],
			'logonew': "Chokokutai"
		},
		extend: {
			colors: {
				accent: '#8593e9',
			},
		},
	},
	plugins: [],
}
