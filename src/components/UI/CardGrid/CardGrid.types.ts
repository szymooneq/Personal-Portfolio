import { IPostCard } from '@/types/Post.types'
import { IProjectCard } from '@/types/Project.types'

export interface CardGridProps {
	type: 'project' | 'post'
	content: IPostCard[] | IProjectCard[]
}
