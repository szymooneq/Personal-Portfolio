import Head from 'next/head'
import { getPostList } from '@/lib/api/getPost'
import Container from '@/components/Layout/Container/Container'
import PostCards from '@/components/UI/PostCard/PostCards'
import { IPostCard } from '@/interfaces/post'
import styles from '@/styles/Projects.module.css'

interface props {
	postList: IPostCard[]
}

function Blog({ postList }: props): JSX.Element {
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
					Welcome to my blog! Here, I share my thoughts, ideas, and experiences
					on various topics.
				</p>

				<PostCards postList={postList} />
			</Container>
		</>
	)
}

export default Blog

export async function getStaticProps() {
	const { postList } = await getPostList()

	return {
		props: {
			postList
		},
		revalidate: 60
	}
}
