import urlFor from '@/lib/sanity/client/urlFor'
import type { CardProps } from './Card.types'
import * as Styled from './Card.styled'
import { circularArrowRightIcon } from '@/assets/icons'

const CARD_ANIMATION = {
	inital: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
	layout: true
}

// TODO: 3d cards
const Card = ({ content }: CardProps): JSX.Element => {
	const { theme, slug, thumbnail, title, type, description } = content

	return (
		<Styled.Wrapper {...CARD_ANIMATION} style={{'--theme-primary': theme[0], '--theme-secondary': theme[1] } as React.CSSProperties}>
			<Styled.Image
				src={urlFor(thumbnail).url()}
				alt=""
				quality={100}
				width={1920}
				height={1080}
				loading="lazy" />

			<Styled.Details>
				<Styled.Type>{type.title}</Styled.Type>
				<Styled.Link href={`/projects/${slug.current}`}>{title}{circularArrowRightIcon}</Styled.Link>
				<Styled.Description>{description}</Styled.Description>
			</Styled.Details>
		</Styled.Wrapper>
	)
}

export default Card
