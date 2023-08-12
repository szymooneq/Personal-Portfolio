import { useEffect, useRef, useState } from 'react'
import urlFor from '@/lib/sanity/client/urlFor'
import type { SliderProps } from './Slider.types'
import * as Styled from './Slider.styled'

const Slider = ({ content }: SliderProps): JSX.Element => {
	const [sectionWidth, setSectionWidth] = useState(0)
	const sectionRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (sectionRef.current) {
			setSectionWidth(sectionRef.current.scrollWidth - sectionRef.current.offsetWidth)
		}
	}, [])

	return (
		<Styled.Section ref={sectionRef}>
			<Styled.Wrapper
				drag="x"
				dragConstraints={{ right: 0, left: -sectionWidth }}
				whileTap={{ cursor: 'grabbing' }}
				animate={{ x: [0, -sectionWidth] }}
				transition={{
					duration: 60,
					repeat: Infinity,
					repeatType: 'reverse',
					repeatDelay: 1
				}}>

				{content.map((image, index) => (
					<Styled.ImageWrapper key={index}>
						<Styled.Image src={urlFor(image).url()} alt={image.alt} width={1920} height={919} quality={100} loading="lazy" />
					</Styled.ImageWrapper>
				))}
				
			</Styled.Wrapper>
		</Styled.Section>
	)
}

export default Slider
