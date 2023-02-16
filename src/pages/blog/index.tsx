import Article from '@/components/Layout/Article';
import PostCards from '@/components/UI/PostCard/PostCards';
import CardList from '@/components/UI/ProjectCard/CardList';
import { ProjectDetails, ProjectTechnology } from '@/interfaces/project';
import { getPostList } from '@/lib/api/getPost';
import styles from '@/styles/Projects.module.css';
import Head from 'next/head';

// TODO: post interface

interface props {
	postList: ProjectDetails[];
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
