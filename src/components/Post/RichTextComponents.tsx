import urlFor from '@/lib/sanity/client/urlFor';
import Image from 'next/image';
import Link from 'next/link';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import styles from './RichText.module.css';

export const RichTextComponents = {
	block: {
		normal: ({ children }: any) => <p className={styles.normal}>{children}</p>,
		h1: ({ children }: any) => <h1 className={styles.h1}>{children}</h1>,
		h2: ({ children }: any) => <h2 className={styles.h2}>{children}</h2>,
		h3: ({ children }: any) => <h3 className={styles.h3}>{children}</h3>,
		h4: ({ children }: any) => <h4 className={styles.h4}>{children}</h4>,
		blockquote: ({ children }: any) => (
			<blockquote className={styles.blockquote}>{children}</blockquote>
		),
		link: (props: any) => {
			// const rel = !href.startsWith('/') ? 'noreferrer noopener' : undefined;

			return (
				<Link href="/" className={styles.link}>
					{props.children}
				</Link>
			);
		}
	},
	list: {
		bullet: ({ children }: any) => <ul className={styles.ul}>{children}</ul>,
		number: ({ children }: any) => <ol className={styles.ol}>{children}</ol>
	},
	types: {
		code: (props: any) => (
			<SyntaxHighlighter
				language={props.value.language}
				style={a11yDark}
				customStyle={{ backgroundColor: '#2e2e33' }}>
				{props.value.code}
			</SyntaxHighlighter>
		),
		image: (props: any) => (
			<div className={styles.imageWrapper}>
				<Image src={urlFor(props.value).url()} alt="Blog Post Image" fill />
			</div>
		)
	}
};
