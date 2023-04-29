import Link from 'next/link'
import Image from 'next/image'
import { motion as m } from 'framer-motion'
import urlFor from '@/lib/sanity/client/urlFor'
import { CardProps } from './Card.types'
import styles from './Card.module.css'

import * as icon from '@/assets/svg'

// TODO: 3d cards
const Card = ({ content }: CardProps): JSX.Element => {
	const { theme, slug, thumbnail, title, type, description } = content

	const cardStyle = {
		'--theme-primary': theme[0],
		'--theme-secondary': theme[1]
	} as React.CSSProperties

	return (
		<m.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className={styles.card}
			style={cardStyle}
			layout>
			<Link href={`/projects/${slug.current}`}>
				<Image src={urlFor(thumbnail).url()} alt={title} width={1920} height={919} />
				<div className={styles.details}>
					<p className={styles.type}>{type.title}</p>
					<div className={styles.title}>
						<h2>{title}</h2>
						{icon.rightCircleArrow}
					</div>
					<p>{description}</p>
				</div>
			</Link>
		</m.div>
	)
}

export default Card
