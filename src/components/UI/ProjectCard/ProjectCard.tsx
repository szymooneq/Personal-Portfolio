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
						<p>{project.type.title}</p>
						<div className={styles.title}>
							<h2>{project.title}</h2>
							{rightCircleArrow}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
}
