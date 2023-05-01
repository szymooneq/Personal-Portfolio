import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		padding: string
		radius: string
		shadow: string
		border: string
		fontSize: {
			primary: string
			secondary: string
			tertiary: string
		}
		colors: {
			primary: string
			gradient: string
			white: string
			black: string
			gray: string
			textHeader: string
			textRGB: string
			backgroundPrimaryRGB: string
			backgroundSecondary: string
		}
	}
}
