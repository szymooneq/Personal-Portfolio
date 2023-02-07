import Hero from '@/components/Hero/Hero';
import Article from '@/components/Layout/Article';
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
			{/* <Article className={styles.content}>
				<div>
					<div className={styles.card}>
						<h3>Hello! I am Simon 👋</h3>
						<p>
							I implement responsive and user-friendly interfaces and API-based
							applications. I&apos;m constantly gaining new knowledge by
							creating and improving projects which help me practice my skills.
							My goal is work in a team that specializes in commercial projects.
							This would give me a chance to further improve my skills and gain
							valuable experience.
						</p>
						<p>
							You can find the result of my work on the Projects page. Also, you
							can check my profile on LinkedIn or GitHub.
						</p>
						<p>Thank you!</p>
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
			</Article> */}
		</>
	);
}

export default Home;
