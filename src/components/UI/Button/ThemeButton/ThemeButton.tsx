import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import styles from './ThemeButton.module.css'

import * as icon from '@/assets/svg'

const ThemeButton = () => {
	const { systemTheme, theme, setTheme } = useTheme()
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	if (!isMounted) return null

	const currentTheme = theme === 'system' ? systemTheme : theme

	const handleToggleTheme = () => {
		if (theme === 'light') return setTheme('dark')

		setTheme('light')
	}

	return (
		<>
			<input
				type="checkbox"
				id="theme"
				className={styles.toggle}
				checked={currentTheme === 'dark' ? true : false}
				onClick={() => handleToggleTheme()}
				readOnly
			/>
			<label htmlFor="theme" aria-label="Toggle theme">
				<div className={styles.themeIcon}>
					{currentTheme === 'dark' ? icon.moonIcon : icon.sunIcon}
				</div>
			</label>
		</>
	)
}

export default ThemeButton
