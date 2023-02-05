import { ProjectDetails } from '@/interfaces/project';
import urlFor from '@/lib/sanity/client/urlFor';
import Link from 'next/link';
import { rightCircleArrow } from '../Svg/SvgIcons';
import styles from './ProjectCard.module.css';

type ProjectCard = {
	project: ProjectDetails;
};

export default function ProjectCard({ project }: ProjectCard): JSX.Element {
	return (
		<Link
			href={`/projects/${project.slug.current}`}
			className={styles.card}
			style={
				{
					'--theme-primary': project.theme[0],
					'--theme-secondary': project.theme[1]
				} as React.CSSProperties
			}>
			<div className={styles.content}>
				<img
					className={styles.img}
					src={urlFor(project.thumbnail).url()}
					alt={`Preview image of "${project.title}" project`}
				/>
				<div className={styles.info}>
					<p className={styles.type}>{project.type.title}</p>
					<div className={styles.title}>
						<h2>{project.title}</h2>
						{rightCircleArrow}
					</div>
					<p className={styles.decription}>{project.description}</p>
				</div>
			</div>
		</Link>
	);
}
