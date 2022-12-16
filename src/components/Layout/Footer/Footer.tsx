import { contactLinks } from '../../../lib/helpers/contactLinks';
import styles from './Footer.module.css';

export default function Footer(): JSX.Element {
	return (
		<footer className={styles.footer}>
			<div className={styles.waves}></div>
			<div className={styles.content}>
				<p>
					Feel free to get in touch and stay connected with me via these
					different channels.
				</p>
				<div className={styles.icons}>
					{contactLinks.map((link) => (
						<a
							key={link.name}
							href={link.url}
							target="_blank"
							rel="noreferrer"
							aria-label={link.ariaLabel}>
							{link.icon}
						</a>
					))}
				</div>
				<p>&copy; | 2022 Szymon Dudka</p>
			</div>
		</footer>
	);
}
