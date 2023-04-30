import { buildLegacyTheme } from 'sanity'

// TODO: sanity theme fix
const theme = {
	'--my-white': '#fff',
	'--my-black': '#1d1d20',
	'--my-blue': '#5d5dff',
	'--my-red': '#db4437',
	'--my-yellow': '#f4b400',
	'--my-green': '#0f9d58'
}

export const myTheme = buildLegacyTheme({
	/* Base theme colors */
	'--black': theme['--my-black'],
	'--white': theme['--my-white'],

	'--gray': '#666',
	'--gray-base': '#666',

	'--component-bg': theme['--my-black'],
	'--component-text-color': theme['--my-white'],

	/* Brand */
	'--brand-primary': theme['--my-blue'],

	// Default button
	'--default-button-color': '#666',
	'--default-button-primary-color': theme['--my-blue'],
	'--default-button-success-color': theme['--my-green'],
	'--default-button-warning-color': theme['--my-yellow'],
	'--default-button-danger-color': theme['--my-red'],

	/* State */
	'--state-info-color': theme['--my-blue'],
	'--state-success-color': theme['--my-green'],
	'--state-warning-color': theme['--my-yellow'],
	'--state-danger-color': theme['--my-red'],

	/* Navbar */
	'--main-navigation-color': theme['--my-black'],
	'--main-navigation-color--inverted': theme['--my-white'],

	'--focus-color': theme['--my-blue']
})
