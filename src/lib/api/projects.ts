import { groq } from 'next-sanity';
import { ITechnology } from '../interfaces/global';
import { IProjectCard, IProjectDetails } from '../interfaces/project';
import { client } from '../sanity/client/sanity.client';

export async function getProjectCards() {
	const query = groq`*[_type == "projects"]{
    slug,
    theme,
    thumbnail,
    title,
    description,
    type->,
    technologies[]->,
  }`;

	const projectList = await client.fetch<IProjectCard[]>(query);
	let technologyList: ITechnology[] = [];

	projectList.map((project) => {
		project.technologies.map((technology) => {
			const isFound: boolean = technologyList.some((element) => {
				if (element.title === technology.title) {
					return true;
				}
				return false;
			});
			if (!isFound) technologyList.push(technology);
		});
	});

	return {
		projectList,
		technologyList
	};
}

export async function getProjectsPaths() {
	const query = groq`*[_type == "projects" && defined(slug.current)][]{
      "params": { "slug": slug.current }
    }`;

	return await client.fetch<string[]>(query);
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

	return await client.fetch<IProjectDetails>(query, queryParams);
}
