import { Project } from '../../../types/types';
import ProjectCard from './ProjectCard';
import styles from './ProjectCard.module.css';

type CardList = {
	projectsList: Project[];
};

export default function CardList({ projectsList }: CardList) {
	return (
		<div className={styles.gridCards}>
			{projectsList.map((project) => (
				<ProjectCard key={project.title} project={project} />
			))}
		</div>
	);
}
