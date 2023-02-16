import styles from '@/components/Project/Project.module.css';
import urlFor from '@/lib/sanity/client/urlFor';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import PortableText from 'react-portable-text';
import Article from '../Layout/Article';
import Technologies from '../UI/Technologies/Technologies';
import { RichTextComponents } from './RichTextComponents';

// TODO: add interface

interface props {
	postData: any;
}

function Post({ postData }: props): JSX.Element {
	return (
		<>
			<Head>
				<title>{`${postData.title} | Projects | Szymon Dudka`}</title>
				<meta name="description" content={postData.description} />
			</Head>

			<Article>
				<p className={styles.description}>Title: {postData.title}</p>
				<p className={styles.description}>Desc: {postData.description}</p>
				<p className={styles.description}>Created: {postData.publishedAt}</p>
				<p className={styles.description}>Edited: {postData.editedAt}</p>

				<Image
					src={urlFor(postData.mainImage).url()}
					alt={postData.title}
					width={1366}
					height={768}
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
