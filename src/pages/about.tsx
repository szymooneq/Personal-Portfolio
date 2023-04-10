import Head from 'next/head';
import Link from 'next/link';
import Container from '@/components/Layout/Container/Container';
import {
	linkedinIcon,
	rightCircleArrow,
	rightUpCircleArrow,
	userFaceID
} from '@/components/UI/Svg/SvgIcons';
import styles from '@/styles/About.module.css';

function About(): JSX.Element {
	return (
		<>
			<Head>
				<title>About me | Szymon Dudka</title>
				<meta
					name="description"
					content="I implement responsive and user-friendly interfaces and API-based applications. I'm constantly gaining new knowledge by creating and improving projects which help me practice my skills."
				/>
			</Head>
			<Container header="About" className={styles.about}>
				<div className={styles.card}></div>

				<div className={styles.card}>
					<h2>Hey, I&apos;m Simon 👋</h2>
				</div>

				<div className={styles.card}>
					<h3 className={styles.title}>About me</h3>
					<p className={styles.description}>
						I implement responsive and user-friendly interfaces and API-based
						applications. I&apos;m constantly gaining new knowledge by creating
						and improving projects which help me practice my skills.
					</p>
				</div>

				<Link href="projects" className={styles.card}>
					<p className={styles.label}>Check my projects</p>
					<div className={styles.flexEnd}>
						<h3 className={styles.title}>See my work</h3>
						{rightCircleArrow}
					</div>
				</Link>

				<Link
					className={styles.card}
					href="https://www.linkedin.com/in/szymon-dudka"
					target="_blank"
					rel="noreferrer"
					aria-label="Check my profile on LinkedIn">
					{linkedinIcon}
					<div className={styles.flexEnd}>{rightUpCircleArrow}</div>
				</Link>

				<Link href="contact" className={styles.card}>
					<h3 className={styles.title}>Let&apos;s work together ✨</h3>
					<div className={styles.flexEnd}>
						<h2>Get in touch now</h2>
						{rightCircleArrow}
					</div>
				</Link>

				<Link href="resume" className={styles.card}>
					{userFaceID}
					<p className={styles.label}>Learn more about me</p>
					<div className={styles.flexEnd}>
						<h3 className={styles.title}>See my resume</h3>
						{rightCircleArrow}
					</div>
				</Link>
			</Container>
		</>
	);
}

export default About;
