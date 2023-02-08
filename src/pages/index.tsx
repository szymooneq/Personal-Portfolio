import astronaut from '@/assets/astronaut.png';
import Starfield from '@/components/UI/Starfield/Starfield';
import { contactLinks } from '@/lib/helpers/contactLinks';
import styles from '@/styles/Home.module.css';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

function Home(): JSX.Element {
	return (
		<>
			<Head>
				<title>Szymon Dudka | Frontend Developer</title>
				<meta
					name="description"
					content="Szymon Dudka personal portfolio website."
				/>
			</Head>

			<div className={styles.hero}>
				<Starfield />

				<header className={styles.header}>
					<div className={styles.content}>
						<h1>Szymon Dudka</h1>
						<h2>Frontend Developer</h2>

						<div className={styles.links}>
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
					</div>

					<div className={styles.astronaut}>
						<Image
							src={astronaut}
							alt="Flying astronaut"
							width={250}
							height={250}
						/>
					</div>
				</header>
			</div>
		</>
	);
}

export default Home;
