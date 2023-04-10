import Head from 'next/head';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import urlFor from '@/lib/sanity/client/urlFor';
import { RichTextComponents } from './RichTextComponents';
import BackButton from '@/components/UI/BackButton/BackButton';
import { IPostDetails } from '@/lib/interfaces/post';
import styles from './Post.module.css';

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
				<title>{`${postData.title} | Blog | Szymon Dudka`}</title>
				<meta name="description" content={postData.description} />
				<meta
					name="keywords"
					content="React, JSX, stany, rerenderowanie, rekoncyliacja"
				/>
				<meta name="author" content="Szymon Dudka" />
			</Head>

			<article className={styles.article}>
				<header className={styles.header}>
					<p className={styles.technologies}>
						{postData.technologies[0].title}
					</p>
					<h1 className={styles.title}>{postData.title}</h1>
					<p className={styles.date}>{formatDate(postData.publishedAt)}</p>
					<Image
						className={styles.image}
						src={urlFor(postData.mainImage).url()}
						alt={postData.title}
						fill
					/>
				</header>

				<section>
					<PortableText value={postData.body} components={RichTextComponents} />
				</section>

				<BackButton href="/blog" />
			</article>
		</>
	);
}

export default Post;
