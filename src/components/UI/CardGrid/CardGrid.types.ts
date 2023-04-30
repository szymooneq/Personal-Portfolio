import { IPostCard } from '@/interfaces/Post.types'
import { IProjectCard } from '@/interfaces/Project.types'

export interface CardGridProps {
	type: 'project' | 'post'
	content: IPostCard[] | IProjectCard[]
}
