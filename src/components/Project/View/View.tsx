import Link from 'next/link'
import { ViewProps } from './View.types'
import styles from './View.module.css'

import * as icon from '@/assets/svg'
import Container from '@/components/Layout/Container'
import Slider from '@/components/Project/Slider'
import Technologies from '@/components/UI/Technologies'
import * as Button from '@/components/UI/Button'
import List from './List'

const projectLinks = [
	{
		name: 'Vercel',
		link: 'View live site',
		icon: icon.vercelIcon
	},
	{
		name: 'GitHub',
		link: 'View source code',
		icon: icon.githubIcon
	}
]

const View = ({ content }: ViewProps): JSX.Element => (
	<Container>
		<header>
			<h1 className={styles.title}>
				{content.title} - {content.type.title}
			</h1>
			<p className={styles.description}>{content.description}</p>
		</header>

		<div className={styles.links}>
			{projectLinks.map((link, id) => (
				<Link
					key={id}
					href={content.links[id].url}
					className={styles.link}
					target="_blank"
					rel="noreferrer">
					{link.link}
					{link.icon}
				</Link>
			))}
		</div>

		<Slider images={content.images} />

		<List title="Main technologies">
			<Technologies technologies={content.technologies} />
		</List>

		{content.stack.length > 0 ? (
			<List type="list" title="Stack">
				{content.stack.map((item) => (
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
			{content.details.map((detail) => (
				<li key={detail}>{detail}</li>
			))}
		</List>

		<Button.ReturnButton href="/projects" />
	</Container>
)

export default View
