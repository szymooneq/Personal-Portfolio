import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ContentLayout from '../../src/components/Layout/ContentLayout';
import CardList from '../../src/components/UI/ProjectCard/CardList';
import Technologies from '../../src/components/UI/Technologies/Technologies';
import { getAllProjects } from '../../src/lib/api/projects';
import styles from '../../src/styles/Projects.module.css';
import { Project, ProjectTechnology } from '../../src/types/types';

type ProjectsType = {
	projectsList: Project[];
	technologiesList: ProjectTechnology[];
};

export default function Projects({
	projectsList,
	technologiesList
}: ProjectsType): JSX.Element {
	const { query } = useRouter();
	const [filteredProjects, setFilteredProjects] =
		useState<Project[]>(projectsList);

	useEffect(() => {
		if (query.category) {
			setFilteredProjects(
				projectsList.filter((project) =>
					project.technologies.find((technology) =>
						technology.title.includes(query.category as string)
					)
				)
			);
		} else {
			setFilteredProjects(projectsList);
		}
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

			<ContentLayout header="Projects">
				<p className={styles.desc}>
					Here you will find some of my projects that I have managed to create
					so far. I created each project myself, learning from various sources,
					such as documentation, YouTube videos, or paid courses, but I was
					primarily trying to understand the source code and work with it, not
					to copy ready-made materials from the Internet. You can easily filter
					projects by technology by clicking on the selected technology.
				</p>

				<Technologies technologies={technologiesList} />

				<CardList projectsList={filteredProjects} />
			</ContentLayout>
		</>
	);
}

export async function getStaticProps() {
	const { projectsList, technologiesList } = await getAllProjects();

	return {
		props: {
			projectsList,
			technologiesList
		}
	};
}
