import Article from '@/components/Layout/Article';
import { rightUpCircleArrow } from '@/components/UI/Svg/SvgIcons';
import { contactLinks } from '@/lib/helpers/contactLinks';
import styles from '@/styles/Resume.module.css';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

const educationList = [
	{
		title: 'PWSZ (Akademia Nauk Stosowanych), Nowy Sącz',
		timeline: 'Sep 2018 - Jun 2022',
		description:
			'I graduated with applied computer science. I learned the basics of programming and got to know algorithms and data structures, databases. I also learned web fundamentals and created my first projects as part of the classes.'
	},
	{
		title: 'HTML, CSS and JavaScript Courses',
		timeline: 'Jul 2022 - Sep 2022',
		description:
			'I deepened my knowledge of the basics of websites. I learned semantic HTML, positioning elements on the page, styling units, animations, and responsive web design. I spent a lot of time learning JavaScript. I got to know the syntax, DOM manipulation, and fetch API and I still learning new things while practising every day.'
	},
	{
		title: 'Advanced CSS',
		timeline: 'Aug 2022',
		description:
			'I have completed the Bootstrap course. I have learned and worked with such frameworks as Tailwind or styled-components and the SASS preprocessor.'
	},
	{
		title: 'React Course (with Next.js)',
		timeline: 'Sep 2022',
		description:
			'I completed a React course and got to know the components, webpack, JSX, and hooks offered by the framework. I worked with popular libraries such as Redux, React Router, React Query and Formik. I also learned about server-side rendering using the Next.js framework.'
	},
	{
		title: 'TypeScript Course',
		timeline: 'Nov 2022',
		description:
			'I have completed one of the free TypeScript courses available on YouTube.'
	},
	{
		title: 'Freelancer Course',
		timeline: 'Dec 2022',
		description: ''
	}
];

const stackList = [
	'JavaScript | TypeScript | React.js | Next.js | npm',
	'Redux | Jest | Reducer | Context | Hooks | yarn',
	'Vite | React Router | React Query | Formik',
	'HTML | CSS | RWD | REST API',
	'SASS | Tailwind | Bootstrap | styled-components',
	'MySQL | Firebase | Sanity CMS | Strapi CMS',
	'Git | GitHub',
	'VSCode | Figma | Adobe Photoshop'
];

const hobbyList = [
	'Travel | Gaming | Web Design | Technology',
	'Astronomy | Photography | Football'
];

function Resume(): JSX.Element {
	return (
		<>
			<Head>
				<title>Resume | Szymon Dudka</title>
				<meta name="description" content="" />
			</Head>

			<Article header="Resume" className={styles.main}>
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
							<h3>szymooneq@zohomail.eu</h3>
							<h3>www.szymondudka.xyz</h3>
						</div>
						<Link className={styles.contactMe} href="contact">
							Contact Me
						</Link>
					</div>
					<div className={styles.card}>
						{contactLinks.map((link, id) => (
							<Fragment key={link.name}>
								<div className={styles.link}>
									<Link href={link.url} target="_blank" rel="noreferrer">
										<div className={styles.linkDesc}>
											<h2>{link.name}</h2>
											{rightUpCircleArrow}
										</div>
									</Link>
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
							{educationList.map((item) => (
								<div key={item.title} className={styles.sectionItem}>
									<h3>{item.title}</h3>
									<p className={styles.sectionTimeline}>{item.timeline}</p>
									<p className={styles.sectionDescription}>
										{item.description}
									</p>
								</div>
							))}
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
						{stackList.map((item) => (
							<p key={item} className={styles.sectionDescription}>
								{item}
							</p>
						))}
					</div>
					<div className={styles.contentItem}>
						<h2 className={styles.name}>Hobby / Interest</h2>
						{hobbyList.map((item) => (
							<p key={item} className={styles.sectionDescription}>
								{item}
							</p>
						))}
					</div>
				</div>
			</Article>
		</>
	);
}

export default Resume;
