import aboutProjects from '@/assets/aboutProjects.png';
import Article from '@/components/Layout/Article';
import {
	linkedinIcon,
	rightCircleArrow,
	rightUpCircleArrow,
	userFaceID
} from '@/components/UI/Svg/SvgIcons';
import styles from '@/styles/About.module.css';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

function About(): JSX.Element {
	return (
		<>
			<Head>
				<title>About me | Szymon Dudka</title>
				<meta
					name="description"
					content="I implement responsive and user-friendly interfaces and API-based
					applications."
				/>
			</Head>
			<Article header="About" className={styles.about}>
				<div className={styles.card} />
				<div className={styles.card}>
					<h2 className={styles.bigTitle}>Hey, I&apos;m Simon 👋</h2>
				</div>
				<div className={styles.card}>
					<h3 className={styles.title}>About me</h3>
					<p className={styles.description}>
						I implement responsive and user-friendly interfaces and API-based
						applications. I&apos;m constantly gaining new knowledge by creating
						and improving projects which help me practice my skills. experience.
					</p>
				</div>
				<Link href="projects" className={styles.card}>
					<Image
						src={aboutProjects}
						width={590}
						height={190}
						alt="Background with project thumbnails"
					/>
					<p>Check my projects</p>
					<div className={styles.flex}>
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
					<div className={styles.linkedIn}>{linkedinIcon}</div>
					{rightUpCircleArrow}
				</Link>
				<Link href="contact" className={styles.card}>
					<h3 className={styles.title}>Let&apos;s work together ✨</h3>
					<div className={styles.flex}>
						<h2 className={styles.getTouch}>Get in touch now</h2>
						{rightCircleArrow}
					</div>
				</Link>
				<Link href="resume" className={styles.card}>
					{userFaceID}
					<p>Learn more about me</p>
					<div className={styles.flex}>
						<h3 className={styles.title}>See my resume</h3>
						{rightCircleArrow}
					</div>
				</Link>
			</Article>
		</>
	);
}

export default About;
