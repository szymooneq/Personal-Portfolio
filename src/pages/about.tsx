import Head from 'next/head'
import Header from '@/components/Layout/Header'
import * as Styled from '@/styles/About.styled'
import { Container, SrOnly } from '@/components/shared.styled'
import { circularArrowRightIcon, circularArrowTopRightIcon, faceIdIcon, linkedInIcon } from '@/assets/icons'

export default function About(): JSX.Element {
	return (
		<>
			<Head>
				<title>About me | Szymon Dudka</title>
				<meta
					name="description"
					content="I implement responsive and user-friendly interfaces and API-based applications. I'm constantly gaining new knowledge by creating and improving projects which help me practice my skills." />
			</Head>

			<Container>
				<Header content='About' />

				<Styled.Wrapper>
					<Styled.Card />

					<Styled.Card>
						<Styled.CardTitle>Hey, I&apos;m Simon 👋</Styled.CardTitle>
					</Styled.Card>

					<Styled.Card>
						<Styled.CardSubtitle>About me</Styled.CardSubtitle>
						<Styled.CardDescription>
							I implement responsive and&nbsp;user-friendly interfaces and&nbsp;API-based applications.
							I&apos;m constantly gaining new knowledge by creating and&nbsp;improving projects
							which help me practice my skills.
						</Styled.CardDescription>
					</Styled.Card>

					<Styled.Card>
						<Styled.CardHeading>Check my projects</Styled.CardHeading>
						<Styled.CardLink href="projects">See my work{circularArrowRightIcon}</Styled.CardLink>
					</Styled.Card>

					<Styled.Card>
						{linkedInIcon}
						<Styled.CardLink href="https://www.linkedin.com/in/szymon-dudka" target="_blank" rel="noreferrer">
							<SrOnly>LinkedIn</SrOnly>{circularArrowTopRightIcon}
						</Styled.CardLink>
					</Styled.Card>

					<Styled.Card>
						<Styled.CardSubtitle>Let&apos;s work together ✨</Styled.CardSubtitle>
						<Styled.CardLink href="contact" isFeatured>Get in touch now{circularArrowRightIcon}</Styled.CardLink>
					</Styled.Card>

					<Styled.Card>
						{faceIdIcon}
						<Styled.CardHeading>Learn more about me</Styled.CardHeading>
						<Styled.CardLink href="resume">See my resume{circularArrowRightIcon}</Styled.CardLink>
					</Styled.Card>
				</Styled.Wrapper>
			</Container>
		</>
	)
}
