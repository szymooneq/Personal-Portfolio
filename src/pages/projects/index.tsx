import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getProjectCards } from '@/lib/api/projects';
import Container from '@/components/Layout/Container/Container';
import CardList from '@/components/UI/ProjectCard/CardList';
import Technologies from '@/components/UI/Technologies/Technologies';
import { ITechnology } from '@/lib/interfaces/global';
import { IProjectCard } from '@/lib/interfaces/project';
import styles from '@/styles/Projects.module.css';

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
	}, [query.category]);

	return (
		<>
			<Head>
				<title>Projects | Szymon Dudka</title>
				<meta
					name="description"
					content="Here are some of my personal projects I have completed so far. You can easily filter the projects by technology by selecting the desired technology."
				/>
			</Head>

			<Container header="Projects">
				<p className={styles.description}>
					Here are some of my personal projects I have completed so far. You can
					easily filter the projects by technology by selecting the desired
					technology.
				</p>

				<Technologies technologies={technologyList} />

				<CardList projectList={filteredProjects} />
			</Container>
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
