import Link from 'next/link';
import { contactLinks } from '@/lib/helpers/contactLinks';
import styles from './Footer.module.css';

function Footer(): JSX.Element {
	return (
		<footer className={styles.footer}>
			<div className={styles.waves}></div>
			<div className={styles.content}>
				<p>
					Feel free to contact me and stay in touch with me through these
					various channels.
				</p>
				<div className={styles.icons}>
					{contactLinks.map((link) => (
						<Link
							key={link.name}
							href={link.url}
							target="_blank"
							rel="noreferrer"
							aria-label={link.ariaLabel}>
							{link.icon}
						</Link>
					))}
				</div>
				<p>&copy; | 2023 Szymon Dudka</p>
			</div>
		</footer>
	);
}

export default Footer;
