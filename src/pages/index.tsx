import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { contactLinks } from '@/lib/helpers'
import styles from '@/styles/Home.module.css'

import Starfield from '@/components/UI/Starfield'
import { homeAstrounaut } from '@/assets/images'

export default function Home(): JSX.Element {
	return (
		<>
			<Head>
				<title>Szymon Dudka | Frontend Developer</title>
				<meta
					name="description"
					content="Szymon Dudka is a frontend developer with experience in creating responsive and user-friendly interfaces and API-based applications. Visit his portfolio to learn more about his work and skills."
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
							src={homeAstrounaut}
							alt="Flying astronaut"
							quality={100}
							placeholder="blur"
							width={250}
							height={250}
						/>
					</div>
				</header>
			</div>
		</>
	)
}
