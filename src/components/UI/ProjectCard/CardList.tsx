import { IProjectCard } from '@/lib/interfaces/project';
import { AnimatePresence, motion as m } from 'framer-motion';
import ProjectCard from './ProjectCard';
import styles from './ProjectCard.module.css';

interface props {
	projectList: IProjectCard[];
}

function CardList({ projectList }: props): JSX.Element {
	return (
		<m.div layout className={styles.grid}>
			<AnimatePresence>
				{projectList.map((project) => (
					<ProjectCard key={project.title} project={project} />
				))}
			</AnimatePresence>
		</m.div>
	);
}

export default CardList;
