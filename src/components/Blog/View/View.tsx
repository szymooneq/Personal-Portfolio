import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import urlFor from '@/lib/sanity/client/urlFor'
import { ViewProps } from './View.types'
import styles from './View.module.css'

import { renderDate } from '@/lib/helpers'
import RichText from '@/components/Blog/RichText'
import * as Button from '@/components/UI/Button'

const View = ({ content }: ViewProps): JSX.Element => {
	const { technologies, title, publishedAt, mainImage, body } = content

	return (
		<article className={styles.article}>
			<header className={styles.header}>
				<p className={styles.technologies}>{technologies[0].title}</p>
				<h1 className={styles.title}>{title}</h1>
				<p className={styles.date}>{renderDate(publishedAt)}</p>
				<Image src={urlFor(mainImage).url()} alt={title} fill />
			</header>

			<section>
				<PortableText value={body} components={RichText} />
			</section>

			<Button.Retrun href="/blog" />
		</article>
	)
}

export default View
