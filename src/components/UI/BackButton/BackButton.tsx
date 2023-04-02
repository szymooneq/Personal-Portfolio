import Link from 'next/link';
import styles from './BackButton.module.css';

interface props {
	href: string;
}

function BackButton({ href }: props): JSX.Element {
	return (
		<Link href={href} scroll={false} className={styles.backButton}>
			Go back
		</Link>
	);
}

export default BackButton;
