import Link from 'next/link'
import { motion as m } from 'framer-motion'
import urlFor from '@/lib/sanity/client/urlFor'
import { rightCircleArrow } from '@/components/UI/Svg/SvgIcons'
import { IProjectCard } from '@/lib/interfaces/project'
import styles from './ProjectCard.module.css'
import Image from 'next/image'

interface props {
	project: IProjectCard
}

// TODO: 3d cards
function ProjectCard({ project }: props): JSX.Element {
	return (
		<m.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className={styles.card}
			style={
				{
					'--theme-primary': project.theme[0],
					'--theme-secondary': project.theme[1]
				} as React.CSSProperties
			}
			layout>
			<Link href={`/projects/${project.slug.current}`}>
				<Image
					className={styles.img}
					src={urlFor(project.thumbnail).url()}
					alt={project.title}
					width={1920}
					height={919}
				/>
				<div className={styles.details}>
					<p className={styles.type}>{project.type.title}</p>
					<div className={styles.title}>
						<h2>{project.title}</h2>
						{rightCircleArrow}
					</div>
					<p>{project.description}</p>
				</div>
			</Link>
		</m.div>
	)
}

export default ProjectCard
