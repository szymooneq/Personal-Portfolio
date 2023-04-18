import { AnimatePresence, motion as m } from 'framer-motion'
import { CardsProps } from './Cards.types'
import styles from './Cards.module.css'
import { IProjectCard } from '@/interfaces/project'
import { IPostCard } from '@/interfaces/post'

import ProjectCard from '@/components/UI/Cards/Project'
import PostCard from '@/components/UI/Cards/Post'

const Cards = ({ type, data }: CardsProps): JSX.Element => {
	return type === 'project' ? (
		<m.div layout className={styles.grid}>
			<AnimatePresence>
				{data.map((project) => (
					<ProjectCard key={project.title} project={project as IProjectCard} />
				))}
			</AnimatePresence>
		</m.div>
	) : (
		<div className={styles.grid}>
			{data.map((post) => (
				<PostCard key={post.title} post={post as IPostCard} />
			))}
		</div>
	)
}
export default Cards
