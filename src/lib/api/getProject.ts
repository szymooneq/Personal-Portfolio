import { groq } from 'next-sanity'
import { client } from '@/lib/sanity/client/sanity.client'
import { IProjectCard, IProjectDetails } from '@/types/Project.types'
import { removeDuplicateTechnologies } from '@/lib/helpers/array'

async function getProjects() {
	const query = groq`*[_type == "projects"]{
    slug,
    theme,
    thumbnail,
    title,
    description,
    type->,
    technologies[]->,
  }`

	const projectList = await client.fetch<IProjectCard[]>(query)
	const technologyList = removeDuplicateTechnologies(projectList)

	return {
		projectList,
		technologyList
	}
}

async function getProjectsPaths() {
	const query = groq`*[_type == "projects" && defined(slug.current)][]{
      "params": { "slug": slug.current }
    }`

	const projectPaths = await client.fetch<string[]>(query)

	return projectPaths
}

async function getProjectData(queryParams: { slug: string | string[] }) {
	const query = groq`*[_type == "projects" && slug.current == $slug][0]{
    title,
    type->,
    description,
    links[] {
      _key,
        _type,
        url
    },
    images[],
    technologies[]->,
    stack[]->,
    details
  }`

	const projectData = await client.fetch<IProjectDetails>(query, queryParams)

	return projectData
}

export { getProjects, getProjectsPaths, getProjectData }
