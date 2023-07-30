import { InferGetStaticPropsType, GetStaticProps } from 'next'
import Head from 'next/head'
import { groq } from 'next-sanity'
import { client } from '@/lib/sanity/client/sanity.client'
import { removeRepeatedTechnologies } from '@/lib/helpers/removeRepeatedTechnologies'
import { useProjects } from '@/hooks/useProjects'
import Page from '@/components/Layout/Page'
import Technologies from '@/components/UI/Technologies'
import CardGrid from '@/components/UI/CardGrid'
import type { IProjectCard } from '@/types/Project.types'
import styles from '@/styles/Projects.module.css'

export default function ProjectsPage({
	projects,
	technologies
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
	const currentProjects = useProjects(projects)

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
				Here are some of my personal projects I have completed so far. You can easily filter the
				projects by technology by selecting the desired technology.
			</p>

			<Technologies content={technologies} />

			<CardGrid type="project" content={currentProjects} />
		</Page>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const QUERY = groq`*[_type == "projects"]{
		slug,
		theme,
		thumbnail,
		title,
		description,
		type->,
		technologies[]->,
	}`

	const projects = await client.fetch<IProjectCard[]>(QUERY)

	return {
		props: {
			projects,
			technologies: removeRepeatedTechnologies(projects)
		}
	}
}
