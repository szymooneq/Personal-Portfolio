import { AnimatePresence, motion as m } from 'framer-motion'
import { CardGridProps } from './CardGrid.types'
import styles from './CardGrid.module.css'

import { IProjectCard } from '@/types/Project.types'
import { IPostCard } from '@/types/Post.types'
import ProjectCard from '@/components/Project/Card'
import PostCard from '@/components/Blog/Card'

const CardGrid = ({ type, content }: CardGridProps): JSX.Element => {
	switch (type) {
		case 'project':
			return (
				<m.div layout className={styles.grid}>
					<AnimatePresence>
						{content.map((project) => (
							<ProjectCard key={project.title} content={project as IProjectCard} />
						))}
					</AnimatePresence>
				</m.div>
			)

		case 'post':
			return (
				<div className={styles.grid}>
					{content.map((post) => (
						<PostCard key={post.title} content={post as IPostCard} />
					))}
				</div>
			)
	}
}

export default CardGrid
