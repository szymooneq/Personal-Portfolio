import Link from 'next/link'
import Image from 'next/image'
import urlFor from '@/lib/sanity/client/urlFor'
import styles from './Card.module.css'
import { CardProps } from './Card.types'

const Card = ({ content }: CardProps): JSX.Element => (
	<div className={styles.card}>
		<Link href={`/blog/${content.slug.current}`}>
			<div className={styles.content}>
				<Image
					className={styles.img}
					src={urlFor(content.mainImage).url()}
					alt={content.title}
					width={500}
					height={300}
				/>
				<p className={styles.type}>{content.technologies[0].title}</p>
				<div className={styles.info}>
					<div className={styles.title}>
						<h2>{content.title}</h2>
					</div>
					<p className={styles.decription}>{content.description}</p>
				</div>
			</div>
		</Link>
	</div>
)

export default Card
