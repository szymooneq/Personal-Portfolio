import Link from 'next/link'
import Image from 'next/image'
import { motion as m } from 'framer-motion'
import urlFor from '@/lib/sanity/client/urlFor'
import styles from './Card.module.css'

import * as icon from '@/assets/svg'
import { CardProps } from './Card.types'

// TODO: 3d cards
const Card = ({ content }: CardProps): JSX.Element => (
	<m.div
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		exit={{ opacity: 0 }}
		className={styles.card}
		style={
			{
				'--theme-primary': content.theme[0],
				'--theme-secondary': content.theme[1]
			} as React.CSSProperties
		}
		layout>
		<Link href={`/projects/${content.slug.current}`}>
			<Image
				className={styles.img}
				src={urlFor(content.thumbnail).url()}
				alt={content.title}
				width={1920}
				height={919}
			/>
			<div className={styles.details}>
				<p className={styles.type}>{content.type.title}</p>
				<div className={styles.title}>
					<h2>{content.title}</h2>
					{icon.rightCircleArrow}
				</div>
				<p>{content.description}</p>
			</div>
		</Link>
	</m.div>
)

export default Card
