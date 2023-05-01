import Head from 'next/head'
import { getPosts } from '@/lib/api/getPost'
import styles from '@/styles/Projects.module.css'

import { IPostCard } from '@/types/Post.types'
import CardGrid from '@/components/UI/CardGrid'
import Page from '@/components/Layout/Page'

interface BlogProps {
	postList: IPostCard[]
}

export default function Blog({ postList }: BlogProps): JSX.Element {
	return (
		<Page header="Blog">
			<Head>
				<title>Blog | Szymon Dudka</title>
				<meta
					name="description"
					content="Welcome to my blog! Here, I share my thoughts, ideas, and experiences on various topics."
				/>
			</Head>

			<p className={styles.description}>
				Welcome to my blog! Here, I share my thoughts, ideas, and experiences on various
				topics.
			</p>

			<CardGrid type="post" content={postList} />
		</Page>
	)
}

export async function getStaticProps() {
	const postList = await getPosts()

	return {
		props: {
			postList
		},
		revalidate: 60
	}
}
