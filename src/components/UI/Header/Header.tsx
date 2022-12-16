import { motion as m } from 'framer-motion';
import styles from './Header.module.css';

type HeaderType = {
	title: string;
};

export default function Header({ title }: HeaderType): JSX.Element {
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
