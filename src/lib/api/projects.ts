import { Project, ProjectSlug, ProjectTechnology } from '../../types/types';
import { client } from '../sanityConfig';

export async function getAllProjects() {
	const projectsDataQuery = `*[_type == "projects"]{
    slug {
      current
    },
    theme,
    title,
    type {
      _type == 'reference' => @-> {
      title
      }
    },
    technologies[] {
      _type == 'reference' => @-> {
        title,
        icon {
          asset
        }
      }
    },
    thumbnail {
      asset
    },
    links[] {
      url,
      link -> {
        title,
        alt,
        icon {
          asset
        }
      }
    }
  }`;

	const projectsList = await client.fetch(projectsDataQuery);
	let technologiesList: ProjectTechnology[] = [];

	projectsList.map((project: Project) => {
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

export async function getAllProjectsId() {
	const projectsSlugQuery = `*[_type == "projects"]{
    slug {
      current
    }
  }`;

	const projectsWithId = await client.fetch(projectsSlugQuery);

	return projectsWithId.map((project: ProjectSlug) => {
		return {
			params: {
				name: project.slug.current
			}
		};
	});
}

export async function getProjectData(name: string) {
	const projectDataQuery = `*[_type == "projects" && slug.current == "${name}"][0]{
    slug {
      current
    },
    theme,
    title,
    type {
      _type == 'reference' => @-> {
      title
      }
    },
    description,
    technologies[] {
      _type == 'reference' => @-> {
        title,
        icon {
          asset
        }
      }
    },
    stack[] {
      _type == 'reference' => @-> {
        title,
        description,
        url
      }
    },
    details,
    todo,
    images[] {
      asset,
      alt
    },
    links[] {
      url,
      link -> {
        title,
        alt,
        icon {
          asset
        }
      }
    }
  }`;

	const project = await client.fetch(projectDataQuery);

	return {
		name,
		...project
	};
}
