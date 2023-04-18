import Head from 'next/head'
import { getPostList } from '@/lib/api/getPost'
import styles from '@/styles/Projects.module.css'

import { IPostCard } from '@/interfaces/post'
import Container from '@/components/Layout/Container'
import Cards from '@/components/UI/Cards'

interface BlogProps {
	postList: IPostCard[]
}

export default function Blog({ postList }: BlogProps): JSX.Element {
	return (
		<>
			<Head>
				<title>Blog | Szymon Dudka</title>
				<meta
					name="description"
					content="Welcome to my blog! Here, I share my thoughts, ideas, and experiences on various topics."
				/>
			</Head>

			<Container header="Blog">
				<p className={styles.description}>
					Welcome to my blog! Here, I share my thoughts, ideas, and experiences on various
					topics.
				</p>

				<Cards type="post" data={postList} />
			</Container>
		</>
	)
}

export async function getStaticProps() {
	const { postList } = await getPostList()

	return {
		props: {
			postList
		},
		revalidate: 60
	}
}
