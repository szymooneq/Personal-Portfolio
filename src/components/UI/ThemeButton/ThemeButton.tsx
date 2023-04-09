import { useTheme } from 'next-themes';
import styles from './ThemeButton.module.css';
import { sunIcon, moonIcon } from '../Svg/SvgIcons';
import { useEffect, useState } from 'react';

function ThemeButton() {
	const { systemTheme, theme, setTheme } = useTheme();
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;

	const currentTheme = theme === 'system' ? systemTheme : theme;

	const handleToggleTheme = () => {
		if (
			theme === 'system' &&
			document.documentElement.getAttribute('data-theme')?.includes('dark')
		) {
			return setTheme('light');
		}

		if (theme === 'light') return setTheme('dark');

		setTheme('light');
	};

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
					{currentTheme === 'dark' ? moonIcon : sunIcon}
				</div>
			</label>
		</>
	);
}

export default ThemeButton;
