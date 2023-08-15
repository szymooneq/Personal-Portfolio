import { useRouter } from 'next/router'
import Image from 'next/image'
import urlFor from '@/lib/sanity/client/urlFor'
import { TechnologiesProps } from './Technologies.types'
import * as Styled from './Technologies.styled'
import { Link } from '@/components/shared.styled'

const Technologies = ({ content }: TechnologiesProps): JSX.Element => {
	const { query } = useRouter()

	return (
		<Styled.Wrapper>
			{content.map((technology, index) => (
				<li key={index}>
					<Link variant="technology" href={`/projects?category=${technology.title}`} scroll={false} isActive={query.category === technology.title}>
						<Image src={urlFor(technology.icon).url()} alt="" width={20} height={20} quality={100} loading="lazy" />
						<span>{technology.title}</span>
					</Link>
				</li>
			))}

			{query.category ? (
				<Link variant="technology" href="/projects" scroll={false} isReset>x reset filter</Link>
			) : null}
		</Styled.Wrapper>
	)
}

export default Technologies
