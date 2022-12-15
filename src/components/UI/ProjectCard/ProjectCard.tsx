import Link from 'next/link';
import { urlFor } from '../../../lib/sanityConfig';
import { Project } from '../../../types/types';
import { rightCircleArrow } from '../SvgIcons/svgIconsPack';
import styles from './ProjectCard.module.css';

type ProjectCard = {
	project: Project;
};

export default function ProjectCard({ project }: ProjectCard) {
	return (
		<div
			className={styles.card}
			style={
				{
					'--theme-primary': project.theme[0],
					'--theme-secondary': project.theme[1]
				} as React.CSSProperties
			}>
			<Link href={`/projects/${project.slug.current}`}>
				<div className={styles.content}>
					<img
						className={styles.img}
						src={urlFor(project.thumbnail).url()}
						alt={project.title}
					/>
					<div className={styles.desc}>
						<div className={styles.type}>{project.type.title}</div>
						<div className={styles.title}>
							<h1>{project.title}</h1>
							{rightCircleArrow}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
}
