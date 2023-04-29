import Link from 'next/link'
import Image from 'next/image'
import urlFor from '@/lib/sanity/client/urlFor'
import { CardProps } from './Card.types'
import styles from './Card.module.css'

const Card = ({ content }: CardProps): JSX.Element => {
	const { slug, mainImage, title, technologies, description } = content

	return (
		<div className={styles.card}>
			<Link href={`/blog/${slug.current}`}>
				<div className={styles.content}>
					<Image src={urlFor(mainImage).url()} alt={title} width={500} height={300} />
					<p className={styles.type}>{technologies[0].title}</p>
					<div className={styles.info}>
						<div className={styles.title}>
							<h2>{title}</h2>
						</div>
						<p>{description}</p>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default Card
