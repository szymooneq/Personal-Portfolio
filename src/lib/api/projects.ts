import { groq } from 'next-sanity';
import { ProjectDetails, ProjectTechnology } from '../../interfaces/project';
import { client } from '../sanity/client/sanity.client';

export async function getAllProjects() {
	const query = groq`*[_type == "projects"]{
    slug,
    theme,
    thumbnail,
    title,
    description,
    type->,
    technologies[]->,
  }`;

	const projectsList = await client.fetch<ProjectDetails[]>(query);
	let technologiesList: ProjectTechnology[] = [];

	projectsList.map((project) => {
		project.technologies.map((technology) => {
			const isFound: boolean = technologiesList.some((element) => {
				if (element.title === technology.title) {
					return true;
				}
				return false;
			});
			if (!isFound) technologiesList.push(technology);
		});
	});

	return {
		projectsList,
		technologiesList
	};
}

export async function getProjectsPaths() {
	const query = groq`*[_type == "projects" && defined(slug.current)][]{
      "params": { "slug": slug.current }
    }`;

	return await client.fetch(query);
}

export async function getProjectData(queryParams: { slug: string | string[] }) {
	const query = groq`*[_type == "projects" && slug.current == $slug][0]{
    title,
    type->,
    description,
    links[] {
      _key,
        _type,
        link->,
        url
    },
    images[],
    technologies[]->,
    stack[]->,
    details
  }`;

	return await client.fetch<ProjectDetails>(query, queryParams);
}
