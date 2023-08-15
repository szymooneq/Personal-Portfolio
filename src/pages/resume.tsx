import Head from 'next/head'
import { contactLinks } from '@/lib/helpers'
import { Container, Heading, Link } from '@/components/shared.styled'
import * as Styled from '@/styles/Resume.styled'
import resumeAvatar from '@/assets/images/resume-avatar.jpg'
import { circularArrowTopRightIcon } from '@/assets/icons'

const EDUCATION = [
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

const STACK = [
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

const HOBBY = [
	'Travel | Gaming | Web Design | Technology',
	'Aircraft | Photography | Football'
]

export default function Resume(): JSX.Element {
	return (
		<>
			<Head>
				<title>Resume | Szymon Dudka</title>
				<meta
					name="description"
					content="I implement responsive and user-friendly interfaces and API-based applications. I'm constantly gaining new knowledge by creating and improving projects which help me practice my skills." />
			</Head>

			<Container>
				<Heading>Resume</Heading>

				<Styled.Wrapper>
					<Styled.CardSection>

						<Styled.Card>
							<Styled.Avatar>
								<Styled.ImageWrapper tabIndex={0}>
									<Styled.Image src={resumeAvatar} alt="Avatar" width={420} height={420} quality={100} loading="lazy" placeholder="blur" />
								</Styled.ImageWrapper>
								<p>What&apos;s up!</p>
							</Styled.Avatar>

							<Styled.Title>Szymon Dudka</Styled.Title>
							<Styled.Subtitle>Frontend Developer</Styled.Subtitle>

							<Styled.Refrences>
								<p>szymooneq@zohomail.eu</p>
								<p>www.szymondudka.xyz</p>
							</Styled.Refrences>

							<Styled.ContactSection>
								<Link variant="resumePrimary" href="contact">
									Contact Me
								</Link>
								<Link variant="resumePrimary" href="CV_Szymon_Dudka.pdf" target="_blank" rel="noreferrer">
									Get my CV
								</Link>
							</Styled.ContactSection>
						</Styled.Card>

						<Styled.Card>
							{contactLinks.map((link, index) => (
								<Link key={index} href={link.url} variant="resumeSecondary" target="_blank" rel="noreferrer">
									{link.name}
									{circularArrowTopRightIcon}
								</Link>
							))}
						</Styled.Card>
					</Styled.CardSection>

					<div>
						<Styled.Section>
							<Styled.Title>About me</Styled.Title>
							<Styled.Description>
								I implement responsive and user-friendly interfaces and API-based
								applications. I&apos;m constantly gaining new knowledge by creating and
								improving projects which help me practice my skills. My goal is work in a
								team that specializes in commercial projects. This would give me a chance to
								further improve my skills and gain valuable experience.
							</Styled.Description>
						</Styled.Section>

						<Styled.Section>
							<Styled.Title>Education & Courses</Styled.Title>
							{EDUCATION.map(item => (
								<div key={item.title}>
									<Styled.Heading>{item.title}</Styled.Heading>
									<Styled.Timeline>{item.timeline}</Styled.Timeline>
									<Styled.Description>{item.description}</Styled.Description>
								</div>
							))}
						</Styled.Section>

						<Styled.Section>
							<Styled.Title>Projects</Styled.Title>
							<Link href="projects">Go to Projects</Link>
						</Styled.Section>

						<Styled.Section>
							<Styled.Title>Stack</Styled.Title>
							<ul>
								{STACK.map(item => (
									<li key={item}>
										<Styled.Description>{item}</Styled.Description>
									</li>
								))}
							</ul>
						</Styled.Section>

						<Styled.Section>
							<Styled.Title>Hobby / Interest</Styled.Title>
							<ul>
								{HOBBY.map(item => (
									<li key={item}>
										<Styled.Description>{item}</Styled.Description>
									</li>
								))}
							</ul>
						</Styled.Section>
					</div>
				</Styled.Wrapper>
			</Container>
		</>
	)
}
