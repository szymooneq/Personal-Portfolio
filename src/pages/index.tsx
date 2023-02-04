import Hero from '@/components/Hero/Hero';
import ContentLayout from '@/components/Layout/ContentLayout';
import { contactIcon, downloadIcon } from '@/components/UI/Svg/SvgIcons';
import Tagcloud from '@/components/UI/Tagcloud/Tagcloud';
import styles from '@/styles/Home.module.css';
import Head from 'next/head';
import Link from 'next/link';

function Home(): JSX.Element {
	return (
		<>
			<Head>
				<title>Szymon Dudka | Frontend Developer</title>
				<meta
					name="description"
					content="Szymon Dudka personal portfolio website"
				/>
			</Head>

			<Hero />
			<ContentLayout className={styles.content}>
				<div>
					<div className={styles.card}>
						<h1>Hello! I am Szymon 👋</h1>
						<p>
							I am pleased to welcome you to my portfolio website. My name is
							Szymon Dudka and I am a Front-end developer. Programming is my
							passion. I would like to become a Full-stack developer in the
							future. I am an ambitious, persistent person, I like new
							challenges and I pursue my goals. By searching the Internet,
							watching YouTube videos, or reading technological documentation, I
							constantly develop my skills and gain new experiences.
						</p>
						<p>
							You can find the result of my work on the projects page. I tried
							to make every project with attention to detail and describe it
							properly. If you like them, you can contact me via the form
							available on the website. Also, you can check my profile on
							LinkedIn or GitHub.
						</p>
						<p>Thank you! 😊</p>
					</div>
					<div className={styles.quote}>
						&ldquo;If you get up in the morning and think the future is going to
						be better, it is a bright day. Otherwise, it&apos;s not.&ldquo;
						-Elon Musk
					</div>

					<div className={styles.links}>
						<Link href="CV_Szymon_Dudka.pdf" className="button">
							Download my CV{downloadIcon}
						</Link>
						<Link href="contact" className="button">
							Contact Me{contactIcon}
						</Link>
					</div>
				</div>

				<Tagcloud />
			</ContentLayout>
		</>
	);
}

export default Home;
