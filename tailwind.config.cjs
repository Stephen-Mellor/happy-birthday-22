/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
        "fade-in": "fadeIn 1500ms ease-in-out forwards",
        "fade-out": "fadeOut 1500ms ease-in-out forwards",
			},
			keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        fadeOut: { "0%": { opacity: "1" }, "100%": { opacity: "0" } },
			},
		},
	},
	plugins: [],
}
