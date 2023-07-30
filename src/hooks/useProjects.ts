import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import type { IProjectCard } from '@/types/Project.types'

export const useProjects = (projects: Array<IProjectCard>) => {
	const { query } = useRouter()
	const [state, setState] = useState(projects)

	useEffect(() => {
		setState(() => {
			if (query.category) {
				return projects.filter((project) =>
					project.technologies.find((technology) =>
						technology.title.includes(query.category as string)
					)
				)
			}

			return projects
		})
	}, [projects, query.category])

	return state
}
