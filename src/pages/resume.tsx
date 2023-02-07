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
			'I am an IT engineer, I have a degree in applied computer science. I have learned the basics of programming and object-oriented programming. I learned algorithms, data structures, and statistics. I learned about operating systems, I worked on Linux Fedora. I created the first web applications. I learned how to create and manage group projects in short meetings (sprints). I learned about relational databases and the MySQL database. I learned about computer networks, computer graphics, and the basics of cryptography.'
	},
	{
		title: 'HTML, CSS and JavaScript',
		timeline: 'Jul 2022 - Present',
		description:
			'I deepened my knowledge of website basics. I learned semantic HTML, positioning elements on the page, styling units, animations, and responsive web design. I spent a lot of time learning JavaScript. I learned syntax, manipulating DOM, and the Fetch API, and I am still learning new things as I practice every day.'
	},
	{
		title: 'Advanced CSS',
		timeline: 'Aug 2022 - Present',
		description:
			'I have completed the Bootstrap course. I learned about and worked with frameworks like Tailwind or styled-components and the SASS preprocessor.'
	},
	{
		title: 'React (with Next.js)',
		timeline: 'Sep 2022 - Present',
		description:
			'I took a React course and learned about the components, Webpack, JSX, and hooks that the framework offers. I worked with popular libraries like Redux, React Router, React Query, and Formik. I also learned about server-side rendering using the Next.js framework.'
	},
	{
		title: 'TypeScript',
		timeline: 'Nov 2022 - Present',
		description:
			'I completed one of the free TypeScript courses available on YouTube.'
	},
	{
		title: 'Freelancer Course',
		timeline: 'Dec 2022',
		description: ''
	}
];

const stackList = [
	'JavaScript | TypeScript | React.js | Next.js | Vite',
	'Redux | Reducer | Context | Hooks | npm | yarn',
	'React Router | React Query | Pixel Perfect',
	'Formik | React Hook Form | yup | zod',
	'HTML (semantic) | CSS | RWD | BEM | REST API',
	'SASS | Tailwind | Bootstrap | styled-components',
	'MySQL | Firebase | Sanity CMS | Strapi CMS',
	'Git | GitHub',
	'VSCode | Figma | Adobe Photoshop'
];

const hobbyList = [
	'Travel | Gaming | Web Design | Technology',
	'Aircraft | Astronomy | Football'
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
								I implement responsive and user-friendly interfaces and
								API-based applications. I&apos;m constantly gaining new
								knowledge by creating and improving projects which help me
								practice my skills. My goal is work in a team that specializes
								in commercial projects. This would give me a chance to further
								improve my skills and gain valuable experience.
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
							All my projects with details can be found on the Projects page.
						</p>
						<Link className={styles.contactMe} href="projects">
							Go to Projects
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
