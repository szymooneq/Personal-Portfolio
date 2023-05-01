import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import urlFor from '@/lib/sanity/client/urlFor'
import { TechnologiesProps } from './Technologies.types'
import styles from './Technologies.module.css'

const Technologies = ({ content }: TechnologiesProps): JSX.Element => {
	const { query } = useRouter()

	return (
		<div className={styles.technologies}>
			{content.map((technology) => (
				<Link
					key={technology.title}
					href={`/projects?category=${technology.title}`}
					scroll={false}
					className={styles.button}
					data-active={query.category === technology.title}
					aria-label={`Check my ${technology.title} projects`}>
					<Image
						src={urlFor(technology.icon).url()}
						alt={`${technology.title} icon`}
						width={20}
						height={20}
					/>
					<p>{technology.title}</p>
				</Link>
			))}
			<Link
				href="/projects"
				scroll={false}
				className={styles.button}
				data-visible={query.category ? true : false}>
				x reset filter
			</Link>
		</div>
	)
}

export default Technologies
