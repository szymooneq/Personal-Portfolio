import { motion as m } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { urlFor } from '../../../lib/sanityConfig';
import { ProjectIconReference } from '../../../types/types';
import styles from './Slider.module.css';

type SliderType = {
	images: ProjectIconReference[];
};

export default function Slider({ images }: SliderType): JSX.Element {
	const [width, setWidth] = useState<number>(0);
	const slider = useRef() as React.MutableRefObject<HTMLDivElement>;

	useEffect(() => {
		setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
	}, []);

	return (
		<div ref={slider} className={styles.slider}>
			<m.div
				className={styles.inner}
				drag="x"
				dragConstraints={{ right: 0, left: -width }}
				whileTap={{ cursor: 'grabbing' }}
				animate={{ x: [0, -width] }}
				transition={{
					duration: 40,
					repeat: Infinity,
					repeatType: 'reverse',
					repeatDelay: 1
				}}>
				{images.map((image, id) => (
					<div key={id} className={styles.image}>
						<img src={urlFor(image).url()} alt={image.alt} />
					</div>
				))}
			</m.div>
		</div>
	);
}
