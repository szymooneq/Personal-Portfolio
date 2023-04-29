import { useCallback, useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { getProjectCards } from '@/lib/api/getProject'
import styles from '@/styles/Projects.module.css'

import Technologies from '@/components/UI/Technologies'
import CardGrid from '@/components/UI/CardGrid'
import { ITechnology } from '@/interfaces/global'
import { IProjectCard } from '@/interfaces/project'
import Page from '@/components/Layout/Page'

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
		<Page header="Projects">
			<Head>
				<title>Projects | Szymon Dudka</title>
				<meta
					name="description"
					content="Here are some of my personal projects I have completed so far. You can easily filter the projects by technology by selecting the desired technology."
				/>
			</Head>

			<p className={styles.description}>
				Here are some of my personal projects I have completed so far. You can easily
				filter the projects by technology by selecting the desired technology.
			</p>

			<Technologies content={technologyList} />

			<CardGrid type="project" content={filteredProjects} />
		</Page>
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
