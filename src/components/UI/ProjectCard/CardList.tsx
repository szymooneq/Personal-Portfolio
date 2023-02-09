import { ProjectDetails } from '@/interfaces/project';
import { AnimatePresence, motion as m } from 'framer-motion';
import ProjectCard from './ProjectCard';
import styles from './ProjectCard.module.css';

interface props {
	projectsList: ProjectDetails[];
}

function CardList({ projectsList }: props): JSX.Element {
	return (
		<m.div layout className={styles.grid}>
			<AnimatePresence>
				{projectsList.map((project) => (
					<ProjectCard key={project.title} project={project} />
				))}
			</AnimatePresence>
		</m.div>
	);
}

export default CardList;
