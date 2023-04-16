import { HeaderProps } from './Header.types'
import styles from './Header.module.css'

function Header({ title }: HeaderProps): JSX.Element {
	return (
		<header className={styles.header}>
			<h1>{title}</h1>
		</header>
	)
}

export default Header
