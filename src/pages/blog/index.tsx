import Container from '@/components/Layout/Container/Container';
import PostCards from '@/components/UI/PostCard/PostCards';
import { getPostList } from '@/lib/api/getPost';
import { IPostCard } from '@/lib/interfaces/post';
import styles from '@/styles/Projects.module.css';
import Head from 'next/head';

interface props {
	postList: IPostCard[];
}

// TODO: check all page descriptions and update

function Blog({ postList }: props): JSX.Element {
	return (
		<>
			<Head>
				<title>Blog | Szymon Dudka</title>
				<meta
					name="description"
					content="Here you will find some of my projects that I have managed to create so far."
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
	);
}

export default Blog;

export async function getStaticProps() {
	const { postList } = await getPostList();

	return {
		props: {
			postList
		},
		revalidate: 60
	};
}
