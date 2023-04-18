import { groq } from 'next-sanity'
import { client } from '@/lib/sanity/client/sanity.client'
import { ITechnology } from '@/interfaces/global'
import { IProjectCard, IProjectDetails } from '@/interfaces/project'

async function getProjectCards() {
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
	let technologyList: ITechnology[] = []

	projectList.map((project) => {
		project.technologies.map((technology) => {
			const isFound: boolean = technologyList.some((element) => {
				if (element.title === technology.title) {
					return true
				}
				return false
			})
			if (!isFound) technologyList.push(technology)
		})
	})

	return {
		projectList,
		technologyList
	}
}

async function getProjectsPaths() {
	const query = groq`*[_type == "projects" && defined(slug.current)][]{
      "params": { "slug": slug.current }
    }`

	return await client.fetch<string[]>(query)
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

	return await client.fetch<IProjectDetails>(query, queryParams)
}

export { getProjectCards, getProjectsPaths, getProjectData }
