import { motion as m } from 'framer-motion';
import styles from './Header.module.css';

type Header = {
	title: string;
};

export default function Header({ title }: Header) {
	return (
		<m.header
			initial={{ y: 100, opacity: 0 }}
			whileInView={{ y: 0, opacity: 0.5, transition: { duration: 1 } }}
			viewport={{ once: true }}
			className={styles.title}>
			<h1>{title}</h1>
		</m.header>
	);
}
