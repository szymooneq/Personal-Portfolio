import { IPostDetails } from '@/lib/interfaces/post';
import urlFor from '@/lib/sanity/client/urlFor';
import { PortableText } from '@portabletext/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Post.module.css';
import { RichTextComponents } from './RichTextComponents';

interface props {
	postData: IPostDetails;
}

const formatDate = (date: Date) => {
	return new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});
};

function Post({ postData }: props): JSX.Element {
	return (
		<>
			<Head>
				<title>{`${postData.title} | Projects | Szymon Dudka`}</title>
				<meta name="description" content={postData.description} />
			</Head>

			<article className={styles.article}>
				<header className={styles.header}>
					<p className={styles.technologies}>
						{postData.technologies[0].title}
					</p>
					<h1 className={styles.title}>{postData.title}</h1>
					<p className={styles.date}>{formatDate(postData.publishedAt)}</p>
				</header>

				<Image
					className={styles.image}
					src={urlFor(postData.mainImage).url()}
					alt={postData.title}
					fill
				/>

				<p className={styles.date}>{postData.description}</p>

				<PortableText value={postData.body} components={RichTextComponents} />
				<Link href="/blog" scroll={false} className={styles.backButton}>
					Go back
				</Link>
			</article>
		</>
	);
}

export default Post;
