import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import Head from 'next/head'
import { groq } from 'next-sanity'
import { AnimatePresence } from 'framer-motion'
import { client } from '@/lib/sanity/client/sanity.client'
import { removeRepeatedTechnologies } from '@/lib/helpers/removeRepeatedTechnologies'

import { useProjects } from '@/hooks/useProjects'
import Header from '@/components/Layout/Header'
import Technologies from '@/components/UI/Technologies'
import Card from '@/components/Project/Card'

import type { IProjectCard } from '@/types/Project.types'
import * as Styled from '@/styles/Projects.styled'
import { Container } from '@/components/shared.styled'

export default function ProjectsPage({ projects, technologies }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
	const currentProjects = useProjects(projects)

	return (
		<>
			<Head>	
				<title>Projects | Szymon Dudka</title>
				<meta
					name="description"
					content="Here are some of my personal projects I have completed so far. You can easily filter the projects by technology by selecting the desired technology." />
			</Head>

			<Container>
				<Header content="Projects" />

				<article>
					<Styled.Description>
						Here are some of my personal projects I have completed so far. You can easily filter the
						projects by technology by selecting the desired technology.
					</Styled.Description>

					<Technologies content={technologies} />

					<Styled.CardWrapper layout>
						<AnimatePresence>
							{currentProjects.map(project => <Card key={project.title} content={project} />)}
						</AnimatePresence>
					</Styled.CardWrapper>
				</article>
			</Container>
		</>
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

	const projects = await client.fetch<Array<IProjectCard>>(QUERY)

	return {
		props: {
			projects,
			technologies: removeRepeatedTechnologies(projects)
		}
	}
}
