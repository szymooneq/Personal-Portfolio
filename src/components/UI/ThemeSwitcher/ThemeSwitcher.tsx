import { useCallback, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import * as Styled from './ThemeSwitcher.styled'
import { moonIcon, sunIcon } from '@/assets/icons'

// TODO: remove next-themes library
const ThemeSwitcher = () => {
	const { theme, setTheme } = useTheme()
	const [isMounted, setIsMounted] = useState(false)

	const handleToggleTheme = useCallback(() => {
		if (theme === 'light') return setTheme('dark')

		setTheme('light')
	}, [theme, setTheme])

	useEffect(() => {
		setIsMounted(true)
	}, [])

	if (!isMounted) return null

	return (
		<Styled.Wrapper>
			<Styled.Checkbox
				id="theme"
				type="checkbox"
				checked={theme === 'dark' ? true : false}
				onClick={handleToggleTheme}
				readOnly />

				<Styled.Label htmlFor="theme" aria-label="Toggle theme">
					<span>{theme === 'dark' ? moonIcon : sunIcon}</span>
				</Styled.Label>
		</Styled.Wrapper>
	)
}

export default ThemeSwitcher
