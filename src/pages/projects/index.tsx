import Article from '@/components/Layout/Article/Article';
import CardList from '@/components/UI/ProjectCard/CardList';
import Technologies from '@/components/UI/Technologies/Technologies';
import { getProjectCards } from '@/lib/api/projects';
import { ITechnology } from '@/lib/interfaces/global';
import { IProjectCard } from '@/lib/interfaces/project';
import styles from '@/styles/Projects.module.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface props {
	projectList: IProjectCard[];
	technologyList: ITechnology[];
}

function Projects({ projectList, technologyList }: props): JSX.Element {
	const { query } = useRouter();

	const [filteredProjects, setFilteredProjects] = useState(projectList);

	const filterProjects = () => {
		if (query.category) {
			return setFilteredProjects(
				projectList.filter((project) =>
					project.technologies.find((technology) =>
						technology.title.includes(query.category as string)
					)
				)
			);
		}

		setFilteredProjects(projectList);
	};

	useEffect(() => {
		filterProjects();
	}, [projectList, query.category]);

	return (
		<>
			<Head>
				<title>Projects | Szymon Dudka</title>
				<meta
					name="description"
					content="Here you will find some of my projects that I have managed to create so far."
				/>
			</Head>

			<Article header="Projects">
				<p className={styles.description}>
					Here are some of the projects I have been able to realize so far. You
					can easily filter the projects by technology by clicking on the
					selected technology.
				</p>

				<Technologies technologies={technologyList} />

				<CardList projectList={filteredProjects} />
			</Article>
		</>
	);
}

export default Projects;

export async function getStaticProps() {
	const { projectList, technologyList } = await getProjectCards();

	return {
		props: {
			projectList,
			technologyList
		},
		revalidate: 60
	};
}
