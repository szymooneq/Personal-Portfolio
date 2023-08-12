import Slider from '@/components/Project/Slider'
import Technologies from '@/components/UI/Technologies'

import type { ViewProps } from './View.types'
import * as Styled from './View.styled'
import { Container, Link } from '@/components/shared.styled'
import { gitHubIcon, vercelIcon } from '@/assets/icons'

const SOCIAL_LINKS = [
	{
		text: 'View live site',
		icon: vercelIcon
	},
	{
		text: 'View source code',
		icon: gitHubIcon
	}
]

const View = ({ content }: ViewProps): JSX.Element => {
	const { title, type, description, links, images, technologies, stack, details } = content

	return (
		<Container as="article">
			<header>
				<Styled.Title>{`${title} - ${type.title}`}</Styled.Title>
				<Styled.Description>{description}</Styled.Description>
			</header>

			<Styled.SocialSection>
				{SOCIAL_LINKS.map((link, index) => (
					<Link key={index} variant="projectLink" href={links[index].url} target="_blank" rel="noreferrer">
						{link.text}{link.icon}
					</Link>
				))}
			</Styled.SocialSection>

			<Slider content={images} />

			<section>
				<Styled.Heading>Main technologies</Styled.Heading>
				<Technologies content={technologies} />
			</section>

			<section>
				<Styled.Heading>Stack</Styled.Heading>
				<ul>
					{stack.map(item => (
						<Styled.Item key={item.title}>
							<p>
								<Link href={item.url} target="_blank" rel="noreferrer">{item.title}</Link>
								{` - ${item.description}`}
							</p>
						</Styled.Item>
					))}
				</ul>
			</section>

			<section>
				<Styled.Heading>Details</Styled.Heading>
				<ul>
					{details.map(item => (
						<Styled.Item key={item}>
							<p>{item}</p>
						</Styled.Item>
					))}
				</ul>
			</section>

			<Link href="/projects" variant="back" scroll={false}>Go back</Link>
		</Container>
	)
}

export default View
