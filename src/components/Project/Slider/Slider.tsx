import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion as m } from 'framer-motion'
import urlFor from '@/lib/sanity/client/urlFor'
import { SliderProps } from './Slider.types'
import styles from './Slider.module.css'

const Slider = ({ images }: SliderProps): JSX.Element => {
	const [width, setWidth] = useState<number>(0)
	const slider = useRef() as React.MutableRefObject<HTMLDivElement>

	useEffect(() => {
		setWidth(slider.current.scrollWidth - slider.current.offsetWidth)
	}, [])

	return (
		<div ref={slider} className={styles.slider}>
			<m.div
				className={styles.inner}
				drag="x"
				dragConstraints={{ right: 0, left: -width }}
				whileTap={{ cursor: 'grabbing' }}
				animate={{ x: [0, -width] }}
				transition={{
					duration: 60,
					repeat: Infinity,
					repeatType: 'reverse',
					repeatDelay: 1
				}}>
				{images.map((image, index) => (
					<div key={index} className={styles.wrapper}>
						<Image src={urlFor(image).url()} alt={image.alt} width={1920} height={919} />
					</div>
				))}
			</m.div>
		</div>
	)
}

export default Slider
