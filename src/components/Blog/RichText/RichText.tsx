import Link from 'next/link'
import Image from 'next/image'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import urlFor from '@/lib/sanity/client/urlFor'
import styles from './RichText.module.css'

// TODO: clean this file
const RichText = {
	block: {
		normal: ({ children }: any) => <p className={styles.normal}>{children}</p>,
		h1: ({ children }: any) => <h1 className={styles.h1}>{children}</h1>,
		h2: ({ children }: any) => <h2 className={styles.h2}>{children}</h2>,
		h3: ({ children }: any) => <h3 className={styles.h3}>{children}</h3>,
		h4: ({ children }: any) => <h4 className={styles.h4}>{children}</h4>,
		blockquote: ({ children }: any) => (
			<blockquote className={styles.blockquote}>{children}</blockquote>
		),
		link: ({ children }: any) => (
			<Link href="/" className={styles.link}>
				{children}
			</Link>
		)
	},
	list: {
		bullet: ({ children }: any) => <ul className={styles.ul}>{children}</ul>,
		number: ({ children }: any) => <ol className={styles.ol}>{children}</ol>
	},
	types: {
		code: ({ value }: any) => (
			<SyntaxHighlighter
				language={value.language}
				style={a11yDark}
				customStyle={{ backgroundColor: '#2e2e33' }}>
				{value.code}
			</SyntaxHighlighter>
		),
		image: ({ value }: any) => (
			<div className={styles.imageWrapper}>
				<Image src={urlFor(value).url()} alt="Blog Post Image" fill />
			</div>
		)
	}
}

export default RichText
