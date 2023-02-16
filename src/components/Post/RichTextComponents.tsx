import urlFor from '@/lib/sanity/client/urlFor';
import Image from 'next/image';
import Link from 'next/link';
import styles from './RichText.module.css';

export const RichTextComponents = {
	image: (props: any) => {
		return (
			<div className={styles.imageWrapper}>
				<Image src={urlFor(props).url()} alt="Blog Post Image" fill />
			</div>
		);
	},
	ul: ({ children }: any) => <ul className={styles.ul}>{children}</ul>,
	ol: ({ children }: any) => <ol className={styles.ol}>{children}</ol>,
	h1: ({ children }: any) => <h1 className={styles.h1}>{children}</h1>,
	h2: ({ children }: any) => <h2 className={styles.h2}>{children}</h2>,
	h3: ({ children }: any) => <h3 className={styles.h3}>{children}</h3>,
	h4: ({ children }: any) => <h4 className={styles.h4}>{children}</h4>,
	blockquote: ({ children }: any) => (
		<blockquote className={styles.blockquote}>{children}</blockquote>
	),
	link: ({ children, href }: { children: string; href: string }) => {
		// const rel = !href.startsWith('/') ? 'noreferrer noopener' : undefined;

		return (
			<Link href={href} className={styles.link}>
				{children}
			</Link>
		);
	}
};
