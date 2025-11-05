/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx,svelte,vue}',
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#2563eb',
					foreground: '#ffffff',
				},
				muted: '#f3f4f6',
				accent: '#10b981',
			},
		},
	},
	plugins: [],
};



