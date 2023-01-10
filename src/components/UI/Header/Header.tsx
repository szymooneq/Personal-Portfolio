import { motion as m } from 'framer-motion';
import styles from './Header.module.css';

interface props {
	title: string;
}

function Header({ title }: props): JSX.Element {
	return (
		<m.header
			className={styles.title}
			initial={{ y: 100, opacity: 0 }}
			whileInView={{ y: 0, opacity: 0.5, transition: { duration: 1 } }}
			viewport={{ once: true }}>
			<h1>{title}</h1>
		</m.header>
	);
}

export default Header;
