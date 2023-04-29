import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/About.module.css'
import * as icon from '@/assets/svg'
import Page from '@/components/Layout/Page'

export default function About(): JSX.Element {
	return (
		<Page className={styles.about} header="About">
			<Head>
				<title>About me | Szymon Dudka</title>
				<meta
					name="description"
					content="I implement responsive and user-friendly interfaces and API-based applications. I'm constantly gaining new knowledge by creating and improving projects which help me practice my skills."
				/>
			</Head>

			<div className={styles.card} />

			<div className={styles.card}>
				<h2>Hey, I&apos;m Simon 👋</h2>
			</div>

			<div className={styles.card}>
				<h3 className={styles.title}>About me</h3>
				<p className={styles.description}>
					I implement responsive and user-friendly interfaces and API-based applications.
					I&apos;m constantly gaining new knowledge by creating and improving projects
					which help me practice my skills.
				</p>
			</div>

			<Link href="projects" className={styles.card}>
				<p className={styles.label}>Check my projects</p>
				<div className={styles.flexEnd}>
					<h3 className={styles.title}>See my work</h3>
					{icon.rightCircleArrow}
				</div>
			</Link>

			<Link
				className={styles.card}
				href="https://www.linkedin.com/in/szymon-dudka"
				target="_blank"
				rel="noreferrer"
				aria-label="Check my profile on LinkedIn">
				{icon.linkedinIcon}
				<div className={styles.flexEnd}>{icon.rightUpCircleArrow}</div>
			</Link>

			<Link href="contact" className={styles.card}>
				<h3 className={styles.title}>Let&apos;s work together ✨</h3>
				<div className={styles.flexEnd}>
					<h2>Get in touch now</h2>
					{icon.rightCircleArrow}
				</div>
			</Link>

			<Link href="resume" className={styles.card}>
				{icon.userFaceID}
				<p className={styles.label}>Learn more about me</p>
				<div className={styles.flexEnd}>
					<h3 className={styles.title}>See my resume</h3>
					{icon.rightCircleArrow}
				</div>
			</Link>
		</Page>
	)
}
