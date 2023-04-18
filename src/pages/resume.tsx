import { Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { contactLinks } from '@/lib/helpers/contactLinks'
import styles from '@/styles/Resume.module.css'

import Container from '@/components/Layout/Container'
import { rightUpCircleArrow } from '@/components/UI/Svg/SvgIcons'
import resumeAvatar from '@/assets/resumeAvatar.jpg'

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
]

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
]

const hobbyList = [
	'Travel | Gaming | Web Design | Technology',
	'Aircraft | Photography | Football'
]

export default function Resume(): JSX.Element {
	return (
		<Container header="Resume" className={styles.main}>
			<Head>
				<title>Resume | Szymon Dudka</title>
				<meta
					name="description"
					content="I implement responsive and user-friendly interfaces and API-based applications. I'm constantly gaining new knowledge by creating and improving projects which help me practice my skills."
				/>
			</Head>

			<section className={styles.cards}>
				<div className={styles.card}>
					<div className={styles.avatar}>
						<div className={styles.avatarImg}>
							<Image src={resumeAvatar} alt="Avatar" width={420} height={420} />
						</div>
						<div className={styles.avatarMsg}>What&apos;s up!</div>
					</div>

					<h2 className={styles.sectionTitle}>Szymon Dudka</h2>
					<h2 className={styles.subTitle}>Frontend Developer</h2>

					<div className={styles.contact}>
						<h3>szymooneq@zohomail.eu</h3>
						<h3>www.szymondudka.xyz</h3>
					</div>

					<div className={styles.contactButtons}>
						<Link className={styles.button} href="contact">
							Contact Me
						</Link>
						<Link
							className={styles.button}
							href="CV_Szymon_Dudka.pdf"
							target="_blank"
							rel="noreferrer">
							Get my CV
						</Link>
					</div>
				</div>

				<div className={styles.card}>
					{contactLinks.map((link, id) => (
						<Fragment key={link.name}>
							<Link
								href={link.url}
								className={styles.link}
								target="_blank"
								rel="noreferrer">
								{link.name}
								{rightUpCircleArrow}
							</Link>
							{id !== contactLinks.length - 1 ? <hr /> : null}
						</Fragment>
					))}
				</div>
			</section>

			<section>
				<div className={styles.section}>
					<h2 className={styles.sectionTitle}>About me</h2>
					<div>
						<p className={styles.sectionDescription}>
							I implement responsive and user-friendly interfaces and API-based
							applications. I&apos;m constantly gaining new knowledge by creating and
							improving projects which help me practice my skills. My goal is work in a
							team that specializes in commercial projects. This would give me a chance to
							further improve my skills and gain valuable experience.
						</p>
					</div>
				</div>

				<div className={styles.section}>
					<h2 className={styles.sectionTitle}>Education & Courses</h2>
					<ul>
						{educationList.map((item) => (
							<li key={item.title} className={styles.sectionItem}>
								<h3>{item.title}</h3>
								<p className={styles.sectionTimeline}>{item.timeline}</p>
								<p className={styles.sectionDescription}>{item.description}</p>
							</li>
						))}
					</ul>
				</div>

				<div className={styles.section}>
					<h2 className={styles.sectionTitle}>Projects</h2>
					<Link className={styles.button} href="projects">
						Go to Projects
					</Link>
				</div>

				<div className={styles.section}>
					<h2 className={styles.sectionTitle}>Stack</h2>
					<ul>
						{stackList.map((item) => (
							<li key={item} className={styles.sectionDescription}>
								{item}
							</li>
						))}
					</ul>
				</div>

				<div className={styles.section}>
					<h2 className={styles.sectionTitle}>Hobby / Interest</h2>
					<ul>
						{hobbyList.map((item) => (
							<li key={item} className={styles.sectionDescription}>
								{item}
							</li>
						))}
					</ul>
				</div>
			</section>
		</Container>
	)
}
