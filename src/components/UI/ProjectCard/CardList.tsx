import { ProjectDetails } from '@/interfaces/project';
import ProjectCard from './ProjectCard';
import styles from './ProjectCard.module.css';

interface props {
	projectsList: ProjectDetails[];
}

function CardList({ projectsList }: props): JSX.Element {
	return (
		<div className={styles.grid}>
			{projectsList.map((project) => (
				<ProjectCard key={project.title} project={project} />
			))}
		</div>
	);
}

export default CardList;
