import { IPostCard } from '@/interfaces/post'
import { IProjectCard } from '@/interfaces/project'

export interface CardsProps {
	type: 'project' | 'post'
	data: IPostCard[] | IProjectCard[]
}
