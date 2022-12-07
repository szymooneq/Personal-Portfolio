import { client } from './sanityConfig';

export async function getAllProjects() {
  const query = `*[_type == "projects"]{
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

  const projects = await client.fetch(query)

  return projects
}

export async function getAllProjectsId() {
  const query = `*[_type == "projects"]{
    slug {
      current
    }
  }`;

  const projectsWithId = await client.fetch(query)

  return projectsWithId.map((project) => {
    return {
      params: {
        name: project.slug.current
      }
    }
  })
}

export async function getProjectData(name) {
  const query = `*[_type == "projects" && slug.current == "${name}"][0]{
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

  const project = await client.fetch(query)

  return {
    name,
    ...project,
  };
}
