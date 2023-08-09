import Head from 'next/head'
import styles from '@/styles/About.module.css'
import * as Styled from '@/styles/About.styled'

import Page from '@/components/Layout/Page'
import { circularArrowRightIcon, circularArrowTopRightIcon, faceIdIcon, linkedInIcon } from '@/assets/icons'

export default function About(): JSX.Element {
	return (
		<Page className={styles.about} header="About">
			<Head>
				<title>About me | Szymon Dudka</title>
				<meta
					name="description"
					content="I implement responsive and user-friendly interfaces and API-based applications. I'm constantly gaining new knowledge by creating and improving projects which help me practice my skills." />
			</Head>

			<Styled.Card />

			<Styled.Card>
				<Styled.CardTitle>Hey, I&apos;m Simon 👋</Styled.CardTitle>
			</Styled.Card>

			<Styled.Card>
				<Styled.CardHeading as="h3">About me</Styled.CardHeading>
				<Styled.CardDescription>
					I implement responsive and&nbsp;user-friendly interfaces and&nbsp;API-based applications.
					I&apos;m constantly gaining new knowledge by creating and&nbsp;improving projects
					which help me practice my skills.
				</Styled.CardDescription>
			</Styled.Card>

			<Styled.CardLink href="projects">
				<Styled.CardSubtitle>Check my projects</Styled.CardSubtitle>
				<Styled.FlexEnd>
					<Styled.CardHeading>See my work</Styled.CardHeading>
					{circularArrowRightIcon}
				</Styled.FlexEnd>
			</Styled.CardLink>

			<Styled.CardLink 
				href="https://www.linkedin.com/in/szymon-dudka"
				target="_blank"
				rel="noreferrer"
				aria-label="Check my profile on LinkedIn">
				{linkedInIcon}
				<Styled.FlexEnd>{circularArrowTopRightIcon}</Styled.FlexEnd>
			</Styled.CardLink>

			<Styled.CardLink href="contact">
				<Styled.CardHeading>Let&apos;s work together ✨</Styled.CardHeading>
				<Styled.FlexEnd>
					<Styled.GetTouch>Get in touch now</Styled.GetTouch>
					{circularArrowRightIcon}
				</Styled.FlexEnd>
			</Styled.CardLink>

			<Styled.CardLink href="resume">
				{faceIdIcon}
				<Styled.CardSubtitle>Learn more about me</Styled.CardSubtitle>
				<Styled.FlexEnd>
					<Styled.CardHeading>See my resume</Styled.CardHeading>
					{circularArrowRightIcon}
				</Styled.FlexEnd>
			</Styled.CardLink>
		</Page>
	)
}
