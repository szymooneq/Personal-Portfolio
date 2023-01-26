import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import ContentLayout from '../src/components/Layout/ContentLayout';
import { rightUpCircleArrow } from '../src/components/UI/Svg/SvgIcons';
import { contactLinks } from '../src/lib/helpers/contactLinks';
import styles from '../src/styles/Resume.module.css';

function Resume(): JSX.Element {
	return (
		<>
			<Head>
				<title>Resume | Szymon Dudka</title>
				<meta name="description" content="" />
			</Head>

			<ContentLayout header="Resume" className={styles.main}>
				<div className={styles.cards}>
					<div className={styles.card}>
						<div className={styles.avatar}>
							<div className={styles.image}>
								<Image
									src="/avatar.jpg"
									alt="Avatar"
									width={420}
									height={420}
								/>
							</div>
							<div className={styles.whatsUp}>What&apos;s up!</div>
						</div>
						<h2 className={styles.name}>Szymon Dudka</h2>
						<h2 className={styles.work}>Frontend Developer</h2>
						<div className={styles.contacts}>
							<p>szymooneq@zohomail.eu</p>
							<p>www.szymondudka.xyz</p>
						</div>
						<Link className={styles.contactMe} href="contact">
							Contact Me
						</Link>
					</div>
					<div className={styles.card}>
						{contactLinks.map((link, id) => (
							<Fragment key={link.name}>
								<div className={styles.link}>
									<a href={link.url} target="_blank" rel="noreferrer">
										<div className={styles.linkDesc}>
											<p>{link.name}</p>
											{rightUpCircleArrow}
										</div>
									</a>
								</div>
								{id < contactLinks.length - 1 && <hr />}
							</Fragment>
						))}
					</div>
				</div>
				<div className={styles.content}>
					<div className={styles.contentItem}>
						<h2 className={styles.name}>About me</h2>
						<section>
							<p className={styles.sectionDescription}>
								I am a front-end developer with almost one year of
								non-commercial experience. I love creating websites/web
								applications. I am ambitious, persistent, and self-taught. I
								like challenges, I quickly adapt to new technologies and I pay
								attention to the small details. I learn every day to deepen my
								knowledge.
							</p>
						</section>
					</div>
					<div className={styles.contentItem}>
						<h2 className={styles.name}>Education & Courses</h2>
						<section>
							<div className={styles.sectionItem}>
								<h3>PWSZ (Akademia Nauk Stosowanych), Nowy Sącz</h3>
								<p className={styles.sectionTimeline}>Sep 2018 - Jun 2022</p>
								<p className={styles.sectionDescription}>
									I graduated with applied computer science. I learned the
									basics of programming and got to know algorithms and data
									structures, databases. I also learned web fundamentals and
									created my first projects as part of the classes.
								</p>
							</div>
							<div className={styles.sectionItem}>
								<h3>HTML, CSS and JavaScript Courses</h3>
								<p className={styles.sectionTimeline}>Jul 2022 - Sep 2022</p>
								<p className={styles.sectionDescription}>
									I deepened my knowledge of the basics of websites. I learned
									semantic HTML, positioning elements on the page, styling
									units, animations, and responsive web design. I spent a lot of
									time learning JavaScript. I got to know the syntax, DOM
									manipulation, and fetch API and I still learning new things
									while practising every day.
								</p>
							</div>
							<div className={styles.sectionItem}>
								<h3>Advanced CSS</h3>
								<p className={styles.sectionTimeline}>Aug 2022</p>
								<p className={styles.sectionDescription}>
									I have completed the Bootstrap course. I have learned and
									worked with such frameworks as Tailwind or styled-components
									and the SASS preprocessor.
								</p>
							</div>
							<div className={styles.sectionItem}>
								<h3>React Course (with Next.js)</h3>
								<p className={styles.sectionTimeline}>Sep 2022</p>
								<p className={styles.sectionDescription}>
									I completed a React course and got to know the components,
									webpack, JSX, and hooks offered by the framework. I worked
									with popular libraries such as Redux, React Router, React
									Query and Formik. I also learned about server-side rendering
									using the Next.js framework.
								</p>
							</div>
							<div className={styles.sectionItem}>
								<h3>TypeScript Course</h3>
								<p className={styles.sectionTimeline}>Nov 2022</p>
								<p className={styles.sectionDescription}>
									I have completed one of the free TypeScript courses available
									on YouTube.
								</p>
							</div>
							<div className={styles.sectionItem}>
								<h3>Freelancer Course</h3>
								<p className={styles.sectionTimeline}>Dec 2022</p>
								<p className={styles.sectionDescription}></p>
							</div>
						</section>
					</div>
					<div className={styles.contentItem}>
						<h2 className={styles.name}>Projects</h2>
						<p className={styles.sectionDescription}>
							All my projects with details available on the projects page.
						</p>
						<Link className={styles.contactMe} href="projects">
							Go to projects page
						</Link>
					</div>
					<div className={styles.contentItem}>
						<h2 className={styles.name}>Stack</h2>
						<p className={styles.sectionDescription}>
							JavaScript | TypeScript | React.js | Next.js | npm
						</p>
						<p className={styles.sectionDescription}>
							Redux | Jest | Reducer | Context | Hooks | yarn
						</p>
						<p className={styles.sectionDescription}>
							Vite | React Router | React Query | Formik
						</p>
						<p className={styles.sectionDescription}>
							HTML | CSS | RWD | REST API
						</p>
						<p className={styles.sectionDescription}>
							SASS | Tailwind | Bootstrap | styled-components
						</p>
						<p className={styles.sectionDescription}>
							MySQL | Firebase | Sanity CMS | Strapi CMS
						</p>
						<p className={styles.sectionDescription}>Git | GitHub</p>
						<p className={styles.sectionDescription}>
							VSCode | Figma | Adobe Photoshop
						</p>
					</div>
					<div className={styles.contentItem}>
						<h2 className={styles.name}>Interests</h2>
						<p className={styles.sectionDescription}>
							Travel / Gaming / Web Design / Technology / Astronomy /
							Photography / Football
						</p>
					</div>
				</div>
			</ContentLayout>
		</>
	);
}

export default Resume;
