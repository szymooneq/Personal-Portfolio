import styles from './Header.module.css';

interface props {
	title: string;
}

function Header({ title }: props): JSX.Element {
	return (
		<header className={styles.title}>
			<h1>{title}</h1>
		</header>
	);
}

export default Header;
