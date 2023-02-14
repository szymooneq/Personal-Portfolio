import Article from '@/components/Layout/Article';
import CardList from '@/components/UI/ProjectCard/CardList';
import Technologies from '@/components/UI/Technologies/Technologies';
import { ProjectDetails, ProjectTechnology } from '@/interfaces/project';
import { getAllProjects } from '@/lib/api/projects';
import styles from '@/styles/Projects.module.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface props {
	projectsList: ProjectDetails[];
	technologiesList: ProjectTechnology[];
}

function Projects({ projectsList, technologiesList }: props): JSX.Element {
	const { query } = useRouter();
	const [filteredProjects, setFilteredProjects] =
		useState<ProjectDetails[]>(projectsList);

	const filterProjects = () => {
		if (query.category) {
			return setFilteredProjects(
				projectsList.filter((project) =>
					project.technologies.find((technology) =>
						technology.title.includes(query.category as string)
					)
				)
			);
		}

		setFilteredProjects(projectsList);
	};

	useEffect(() => {
		filterProjects();
	}, [projectsList, query.category]);

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

				<Technologies technologies={technologiesList} />

				<CardList projectsList={filteredProjects} />
			</Article>
		</>
	);
}

export default Projects;

export async function getStaticProps() {
	const { projectsList, technologiesList } = await getAllProjects();

	return {
		props: {
			projectsList,
			technologiesList
		},
		revalidate: 60
	};
}
