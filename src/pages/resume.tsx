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
			'I learned the basics of programming and object-oriented programming. I learned algorithms, data structures, and statistics. I learned about operating systems, I worked with Linux Fedora. I created the first web applications. I created group projects in short meetings (sprints). I learned about relational databases and created projects based on MySQL. I learned about computer networks, computer graphics, and the basics of cryptography.'
	},
	{
		title: 'HTML',
		timeline: 'Jul 2022 - Present',
		description:
			'I have deepened my knowledge of HTML. I know semantic HTML. I am learning web accessibility. I use the WAVE plugin.'
	},
	{
		title: 'CSS',
		timeline: 'Jul 2022 - Present',
		description:
			'I have deepened my knowledge of CSS. I know units, I can create variables, position elements, create layouts, and animations, and I know typography. I know RWD, BEM namespaces, and different ways of styling. I use popular utility-first frameworks like Bootstrap and Tailwind. I use the SASS preprocessor. I know libraries with prebuilt components like styled-components, MUI, or Ant Design, and compile CSS with JS using PostCSS.'
	},
	{
		title: 'JavaScript',
		timeline: 'Jul 2022 - Present',
		description:
			'I am learning Javascript all the time. I know the types and scopes of variables, hoisting, data types, and data structures. I know loops and conditionals, exception handling, operators, function types, and contexts they create. I also know the function and object paradigm. I know asynchronous Javascript, event loop, REST API, and HTTP protocol. I can manipulate the DOM. I know common array operations.'
	},
	{
		title: 'React.js',
		timeline: 'Sep 2022 - Present',
		description:
			'I have taken a React course, I know components, Webpack, Vite, JSX, and popular hooks (useState, useEffect, useContext, useReducer, useRef). I can pass values via props, I know HOC, portals, suspense, lazy loading, and error boundaries components.'
	},
	{
		title: 'Next.js',
		timeline: 'Nov 2022 - Present',
		description:
			'I can create statically generated and server-side generated pages. I know the tools that the framework offers and I also know Next.js v13 in beta (app instead of pages).'
	},
	{
		title: 'TypeScript',
		timeline: 'Nov 2022 - Present',
		description:
			'I use TypeScript in every project, I know how to type data (types, interfaces, enums) and use Intellisense to detect errors and search the web for answers.'
	},
	{
		title: 'Optimization',
		timeline: 'Dec 2022 - Present',
		description:
			'I can use development tools to investigate optimization. I use Google PageSpeed and Lighthouse for identifying performance and SEO. I compress images using Photoshop. I use throttling and debouncing functions. I know the best practices for optimizing animations.'
	},
	{
		title: 'Freelancer Course',
		timeline: 'Jan 2023',
		description: ''
	}
];

const stackList = [
	'JavaScript | TypeScript | React.js | Next.js | Vite',
	'Redux | Reducer | Context | Hooks | NPM | Yarn',
	'React Router | React Query | Pixel Perfect',
	'Formik | Yup | Zod',
	'HTML (semantic) | CSS | RWD | BEM | REST API',
	'SASS | Tailwind | Bootstrap | Styled-Components',
	'MySQL | Firebase | Sanity CMS | Strapi CMS',
	'Git | GitHub',
	'VSCode | Figma | Adobe Photoshop'
];

const hobbyList = [
	'Travel | Gaming | Web Design | Technology',
	'Aircraft | Photography | Football'
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
						{contactLinks.map((link) => (
							<Fragment key={link.name}>
								<div className={styles.link}>
									<Link href={link.url} target="_blank" rel="noreferrer">
										<div className={styles.linkDesc}>
											<h2>{link.name}</h2>
											{rightUpCircleArrow}
										</div>
									</Link>
								</div>
								<hr />
							</Fragment>
						))}
						<div className={styles.link}>
							<Link href="CV_Szymon_Dudka.pdf" target="_blank" rel="noreferrer">
								<div className={styles.linkDesc}>
									<h2>CV</h2>
									{rightUpCircleArrow}
								</div>
							</Link>
						</div>
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
