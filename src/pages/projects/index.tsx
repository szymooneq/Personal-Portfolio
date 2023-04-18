import { useCallback, useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { getProjectCards } from '@/lib/api/getProject'
import styles from '@/styles/Projects.module.css'

import Container from '@/components/Layout/Container'
import Technologies from '@/components/UI/Technologies'
import Cards from '@/components/UI/Cards'
import { ITechnology } from '@/interfaces/global'
import { IProjectCard } from '@/interfaces/project'

interface ProjectProps {
	projectList: IProjectCard[]
	technologyList: ITechnology[]
}

export default function Projects({
	projectList,
	technologyList
}: ProjectProps): JSX.Element {
	const { query } = useRouter()
	const [filteredProjects, setFilteredProjects] = useState(projectList)

	const filterProjects = useCallback(() => {
		if (query.category) {
			return setFilteredProjects(
				projectList.filter((project) =>
					project.technologies.find((technology) =>
						technology.title.includes(query.category as string)
					)
				)
			)
		}

		setFilteredProjects(projectList)
	}, [projectList, query.category])

	useEffect(() => {
		filterProjects()
	}, [query.category, filterProjects])

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
					Here are some of my personal projects I have completed so far. You can easily
					filter the projects by technology by selecting the desired technology.
				</p>

				<Technologies technologies={technologyList} />

				<Cards type="project" data={filteredProjects} />
			</Container>
		</>
	)
}

export async function getStaticProps() {
	const { projectList, technologyList } = await getProjectCards()

	return {
		props: {
			projectList,
			technologyList
		},
		revalidate: 60
	}
}
