import astronaut from '@/assets/astronaut.png';
import { contactLinks } from '@/lib/helpers/contactLinks';
import Image from 'next/image';
import styles from './Hero.module.css';
import Starfield from './Starfield/Starfield';

function Hero(): JSX.Element {
	return (
		<header className={styles.hero}>
			<Starfield />

			<div className={styles.content}>
				<div className={styles.heading}>
					<h1>Szymon Dudka</h1>
					<h2>Frontend Developer</h2>

					<div className={styles.links}>
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
				</div>

				<div className={styles.astronaut}>
					<Image
						src={astronaut}
						alt="Flying astronaut"
						width={250}
						height={250}
					/>
				</div>
			</div>
		</header>
	);
}

export default Hero;
