import Link from 'next/link';
import styles from './BackButton.module.css';

type BackButtonProps = {
	href: string;
};

function BackButton({ href }: BackButtonProps): JSX.Element {
	return (
		<Link href={href} scroll={false} className={styles.backButton}>
			Go back
		</Link>
	);
}

export default BackButton;
