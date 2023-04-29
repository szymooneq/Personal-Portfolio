import { IPostCard } from '@/interfaces/post'
import { IProjectCard } from '@/interfaces/project'

export interface CardGridProps {
	type: 'project' | 'post'
	content: IPostCard[] | IProjectCard[]
}
