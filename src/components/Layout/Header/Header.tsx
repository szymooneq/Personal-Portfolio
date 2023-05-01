import { HeaderProps } from './Header.types'
import styles from './Header.module.css'

const Header = ({ content }: HeaderProps): JSX.Element => (
	<header className={styles.header}>
		<h1>{content}</h1>
	</header>
)

export default Header
