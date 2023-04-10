import styles from '@/components/Layout/Navbar/Navbar.module.css';

function Logo(): JSX.Element {
	return (
		<div className={styles.logo}>
			<div className={styles.logoContent}>SD</div>
		</div>
	);
}

export default Logo;
