import { BurgerProps } from './Burger.types'
import styles from '@/components/Layout/Navbar/Navbar.module.css'

const Burger = ({ isExpanded, onClick }: BurgerProps) => (
	<button
		id="burger"
		aria-label="Burger"
		className={styles.burger}
		data-expand={isExpanded}
		onClick={onClick}>
		<span />
		<span />
		<span />
	</button>
)

export default Burger
