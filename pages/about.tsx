import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import aboutProjects from '../src/assets/aboutProjects.png';
import ContentLayout from '../src/components/Layout/ContentLayout';
import {
	linkedinIcon,
	rightCircleArrow,
	rightUpCircleArrow,
	userFaceID
} from '../src/components/UI/Svg/SvgIcons';
import styles from '../src/styles/About.module.css';

function About(): JSX.Element {
	return (
		<>
			<Head>
				<title>About me | Szymon Dudka</title>
				<meta
					name="description"
					content="I'm a Frontend Developer. I create websites / web applications and I constantly develop my development skills. My goal is to become a Fullstack JS Developer."
				/>
			</Head>
			<ContentLayout header="About" className={styles.main}>
				<div className={styles.card}></div>
				<div className={styles.card}>
					<h1 className={styles.title}>Hey, I&apos;m Szymon 👋</h1>
					<p className={styles.secondary}>Frontend Developer</p>
				</div>
				<div className={styles.card}>
					<h2>About me</h2>
					<p className={styles.cardDesc}>
						I&apos;m a Frontend Developer. I create websites/web applications
						and I constantly develop my development skills. My goal is to become
						a Fullstack JS Developer.
					</p>
				</div>
				<Link href="projects" className={styles.card}>
					<Image
						src={aboutProjects}
						width={590}
						height={190}
						alt="Projects card background"
					/>
					<p>Check my projects</p>
					<div className={styles.cardFlex}>
						<h2>See my work</h2>
						{rightCircleArrow}
					</div>
				</Link>
				<a
					className={styles.card}
					href="https://www.linkedin.com/in/szymon-dudka"
					target="_blank"
					rel="noreferrer"
					aria-label="Check my profile on LinkedIn">
					<div className={styles.icon}>{linkedinIcon}</div>
					<div className={styles.arrow}>{rightUpCircleArrow}</div>
				</a>
				<Link href="contact" className={styles.card}>
					<h2>Let&apos;s work together ✨</h2>
					<div className={styles.cardFlex}>
						<p className={styles.getTouch}>Get in touch now</p>
						{rightCircleArrow}
					</div>
				</Link>
				<Link href="resume" className={styles.card}>
					<div className={styles.userFaceID}>{userFaceID}</div>
					<p>Learn more about me</p>
					<div className={styles.cardFlex}>
						<h2>See my resume</h2>
						{rightCircleArrow}
					</div>
				</Link>
			</ContentLayout>
		</>
	);
}

export default About;
