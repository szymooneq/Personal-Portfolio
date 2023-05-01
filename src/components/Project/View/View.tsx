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
		icon: icon.vercel
	},
	{
		name: 'GitHub',
		link: 'View source code',
		icon: icon.github
	}
]

// TODO: Links Button component
const View = ({ content }: ViewProps): JSX.Element => {
	const { title, type, description, links, images, technologies, stack, details } =
		content

	return (
		<Container>
			<header>
				<h1 className={styles.title}>{`${title} - ${type.title}`}</h1>
				<p className={styles.description}>{description}</p>
			</header>

			<div className={styles.links}>
				{projectLinks.map((link, index) => (
					<Link
						key={index}
						href={links[index].url}
						className={styles.link}
						target="_blank"
						rel="noreferrer">
						{link.link}
						{link.icon}
					</Link>
				))}
			</div>

			<Slider images={images} />

			<List title="Main technologies">
				<Technologies content={technologies} />
			</List>

			{stack.length > 0 ? (
				<List type="list" title="Stack">
					{stack.map((item) => (
						<li key={item.title}>
							<Link
								href={item.url}
								className={styles.stackUrl}
								target="_blank"
								rel="noreferrer"
								aria-label={`Link to ${item.title} page`}>
								{item.title}
							</Link>
							{` - ${item.description}`}
						</li>
					))}
				</List>
			) : null}

			<List type="list" title="Details">
				{details.map((detail) => (
					<li key={detail}>{detail}</li>
				))}
			</List>

			<Button.Retrun href="/projects" />
		</Container>
	)
}

export default View
