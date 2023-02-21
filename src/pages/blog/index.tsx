import Article from '@/components/Layout/Article/Article';
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
	console.log(postList);
	return (
		<>
			<Head>
				<title>Blog | Szymon Dudka</title>
				<meta
					name="description"
					content="Here you will find some of my projects that I have managed to create so far."
				/>
			</Head>

			<Article header="Blog">
				<p className={styles.description}>
					Here are some of the projects I have been able to realize so far. You
					can easily filter the projects by technology by clicking on the
					selected technology.
				</p>

				<PostCards postList={postList} />
			</Article>
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
