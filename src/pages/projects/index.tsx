import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { getProjects } from '@/lib/api/getProject'
import styles from '@/styles/Projects.module.css'

import Page from '@/components/Layout/Page'
import Technologies from '@/components/UI/Technologies'
import CardGrid from '@/components/UI/CardGrid'
import { ITechnology } from '@/types/Global.types'
import { IProjectCard } from '@/types/Project.types'
import { findProjects } from '@/lib/helpers/array'

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

	useEffect(() => {
		if (!query.category) {
			return setFilteredProjects(projectList)
		}

		setFilteredProjects(() => findProjects(projectList, query.category as string))
	}, [projectList, query.category])

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
	const { projectList, technologyList } = await getProjects()

	return {
		props: {
			projectList,
			technologyList
		},
		revalidate: 60
	}
}
