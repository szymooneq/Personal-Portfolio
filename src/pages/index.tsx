import Head from 'next/head'
import Starfield from '@/components/UI/Starfield'
import * as Styled from '@/styles/Home.styled'
import { SrOnly } from '@/components/shared.styled'
import { discordIcon, gitHubIcon, linkedInIcon } from '@/assets/icons'

const SOCIAL_LINKS = [
	{
		name: 'LinkedIn',
		url: 'https://www.linkedin.com/in/szymon-dudka',
		icon: linkedInIcon
	},
	{
		name: 'GitHub',
		url: 'https://github.com/szymooneq',
		icon: gitHubIcon
	},
	{
		name: 'Discord',
		url: 'https://discord.com/users/554988199529676800',
		icon: discordIcon
	}
]

// TODO: SEO + robots.txt
export default function Home(): JSX.Element {
	return (
		<>
			<Head>
				<title>Szymon Dudka | Frontend Developer</title>
				<meta
					name="description"
					content="Szymon Dudka is a frontend developer with experience in creating responsive and user-friendly interfaces and API-based applications. Visit his portfolio to learn more about his work and skills." />
			</Head>

			<Starfield />

			<Styled.Section>
				<Styled.Heading>Szymon Dudka</Styled.Heading>
				<Styled.SubHeading>Frontend Developer</Styled.SubHeading>

				<Styled.SocialLinks>
					{SOCIAL_LINKS.map(link => (
						<li key={link.name}>
							<Styled.Link href={link.url} target="_blank" rel="noreferrer">
								<SrOnly>{link.name}</SrOnly>
								{link.icon}
							</Styled.Link>
						</li>
					))}
				</Styled.SocialLinks>
			</Styled.Section>
		</>
	)
}
