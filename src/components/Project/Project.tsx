import Link from 'next/link'
import { ProjectProps } from './Project.types'
import styles from './Project.module.css'

import { githubIcon, vercelIcon } from '@/components/UI/Svg/SvgIcons'
import Container from '@/components/Layout/Container/Container'
import Slider from '@/components/UI/Slider/Slider'
import Technologies from '@/components/UI/Technologies/Technologies'
import BackButton from '@/components/UI/BackButton/BackButton'
import List from './List'

const projectLinks = [
	{
		name: 'Vercel',
		link: 'View live site',
		icon: vercelIcon
	},
	{
		name: 'GitHub',
		link: 'View source code',
		icon: githubIcon
	}
]

const Project = ({ projectData }: ProjectProps): JSX.Element => (
	<Container>
		<header>
			<h1 className={styles.title}>
				{projectData.title} - {projectData.type.title}
			</h1>
			<p className={styles.description}>{projectData.description}</p>
		</header>

		<div className={styles.links}>
			{projectLinks.map((link, id) => (
				<Link
					key={id}
					href={projectData.links[id].url}
					className={styles.link}
					target="_blank"
					rel="noreferrer">
					{link.link}
					{link.icon}
				</Link>
			))}
		</div>

		<Slider images={projectData.images} />

		<List title="Main technologies">
			<Technologies technologies={projectData.technologies} />
		</List>

		{projectData.stack.length > 0 ? (
			<List type="list" title="Stack">
				{projectData.stack.map((item) => (
					<li key={item.title}>
						<Link
							href={item.url}
							className={styles.stackUrl}
							target="_blank"
							rel="noreferrer"
							aria-label={`Link to ${item.title} page`}>
							{item.title}
						</Link>{' '}
						- {item.description}
					</li>
				))}
			</List>
		) : null}

		<List type="list" title="Details">
			{projectData.details.map((detail) => (
				<li key={detail}>{detail}</li>
			))}
		</List>

		<BackButton href="/projects" />
	</Container>
)

export default Project
