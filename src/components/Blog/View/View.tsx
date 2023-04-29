import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import urlFor from '@/lib/sanity/client/urlFor'
import styles from './View.module.css'

import RichText from '@/components/Blog/RichText'
import * as Button from '@/components/UI/Button'
import { ViewProps } from './View.types'

const formatDate = (date: Date) => {
	return new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	})
}

const View = ({ content }: ViewProps): JSX.Element => (
	<article className={styles.article}>
		<header className={styles.header}>
			<p className={styles.technologies}>{content.technologies[0].title}</p>
			<h1 className={styles.title}>{content.title}</h1>
			<p className={styles.date}>{formatDate(content.publishedAt)}</p>
			<Image
				className={styles.image}
				src={urlFor(content.mainImage).url()}
				alt={content.title}
				fill
			/>
		</header>

		<section>
			<PortableText value={content.body} components={RichText} />
		</section>

		<Button.ReturnButton href="/blog" />
	</article>
)

export default View
