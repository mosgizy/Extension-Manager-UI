/** @type {import('tailwindcss').Config} */
export default {
	content: [
		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	darkMode:'class',
	theme: {
		extend: {
			colors: {
				primary: {
					0:'var(--neutral-100)',
					100: 'var(--neutral-100)',
					200: 'var(--neutral-200)',
					300: 'var(--neutral-300)',
					600: 'var(--neutral-600)',
					700: 'var(--neutral-700)',
					800: 'var(--neutral-800)',
					900: 'var(--neutral-900)',
				},
				secondary: {
					100: 'var(--red-400)',
					200: 'var(--red-500)',
					300:'var(--red-700)'
				}
			},
			backgroundImage: {
				light: 'var(--Light-Gradient)',
				dark:'var(--Dark-Gradient)'
			}
		},
	},
	plugins: [],
};