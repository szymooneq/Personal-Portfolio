import type { ITechnology } from '@/types/Global.types'
import type { IProjectCard } from '@/types/Project.types'

export const removeRepeatedTechnologies = (projectList: Array<IProjectCard>) => {
	const filteredArray: Array<ITechnology> = []

	projectList.forEach((project) =>
		project.technologies.forEach((technology) => {
			const isFound = filteredArray.some((element) => element.title === technology.title)

			if (!isFound) filteredArray.push(technology)
		})
	)

	return filteredArray
}
