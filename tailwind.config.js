/*eslint no-undef: "error"*/
/*eslint-env node*/
/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [],
	corePlugins: {
		preflight: false, // <== disable this!
	},
}
