import { ITechnology } from '@/interfaces/Global.types'
import { IProjectCard } from '@/interfaces/Project.types'

const removeDuplicateTechnologies = (array: IProjectCard[]) => {
	const filteredArray: ITechnology[] = []

	array.map((project) =>
		project.technologies.map((technology) => {
			const isFound = filteredArray.some((element) => {
				if (element.title === technology.title) return true
				return false
			})

			if (!isFound) filteredArray.push(technology)
		})
	)

	return filteredArray
}

const findProjects = (projects: IProjectCard[], query: string) => {
	return projects.filter(({ technologies }) =>
		technologies.find(({ title }) => title.includes(query))
	)
}

export { removeDuplicateTechnologies, findProjects }
