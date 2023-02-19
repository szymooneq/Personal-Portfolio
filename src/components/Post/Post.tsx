import urlFor from '@/lib/sanity/client/urlFor';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import PortableText from 'react-portable-text';
import Article from '../Layout/Article';
import Technologies from '../UI/Technologies/Technologies';
import styles from './Post.module.css';
import { RichTextComponents } from './RichTextComponents';

// TODO: add interface

interface props {
	postData: any;
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

			<Article>
				<h1 className={styles.title}>{postData.title}</h1>
				{/* <p className={styles.date}>{postData.description}</p> */}
				<p className={styles.date}>{formatDate(postData.publishedAt)}</p>
				{/* <p>Edited: {formatDate(postData.editedAt)}</p> */}

				<Image
					className={styles.image}
					src={urlFor(postData.mainImage).url()}
					alt={postData.title}
					fill
				/>
				<Technologies technologies={postData.technologies} />
				<PortableText
					projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
					dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
					content={postData.body}
					serializers={RichTextComponents}
				/>
				<Link href="/blog" scroll={false} className={styles.backButton}>
					Go back
				</Link>
			</Article>
		</>
	);
}

export default Post;
