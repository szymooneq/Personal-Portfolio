const screen = {
	sm: `(min-width: 640px)`,
	md: `(min-width: 768px)`,
	lg: `(min-width: 1024px)`,
	xl: `(min-width: 1280px)`,
	xxl: `(min-width: 1536px)`
}

const base = {
	padding: '2rem',
	radius: '1rem',
	fontSize: {
		primary: '[20px, 22px, 24px, 26px]',
		secondary: '[32px, 34px, 36px, 40px, 60px]',
		tertiary: '[40px, 64px, 80px, 88px]'
	}
}

const baseColors = {
	primary: '#258afe',
	secondary: '#aa26ff',
	gradient:
		'linear-gradient(to bottom right, #258afe -10.4%, #b69dd7 26.59%, #aa26ff 64.37%, #258afe 109.47%)'
}

const lightTheme = {
	colors: {
		...baseColors,
		white: '#ffffff',
		black: '#000000',
		gray: '#6e6e6e',
		textHeader: '#808080',
		textRGB: '0, 0, 0',
		backgroundPrimaryRGB: '252, 250, 244',
		backgroundSecondary: '#ffffff'
	},
	shadow:
		'0 0 0 1px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.05), 0 12px 24px rgba(0, 0, 0, 0.05)',
	border: '1px solid #eaeaea'
}

const darkTheme = {
	colors: {
		...baseColors,
		white: '#000000',
		black: '#ffffff',
		gray: '#828282',
		textHeader: '#2e2e33',
		textRGB: '255, 255, 255',
		backgroundPrimaryRGB: '18, 19, 23',
		backgroundSecondary: '#191a1e'
	},
	shadow: 'none',
	border: 'none'
}

export { screen, base, lightTheme, darkTheme }
