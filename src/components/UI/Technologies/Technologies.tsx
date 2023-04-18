import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import urlFor from '@/lib/sanity/client/urlFor'
import { TechnologiesProps } from './Technologies.types'
import styles from './Technologies.module.css'

const Technologies = ({ technologies }: TechnologiesProps): JSX.Element => {
	const { query } = useRouter()

	return (
		<div className={styles.technologies}>
			{technologies.map((el) => (
				<Link
					key={el.title}
					href={`/projects?category=${el.title}`}
					scroll={false}
					className={styles.button}
					data-active={query.category === el.title}
					aria-label={`Check my ${el.title} projects`}>
					<Image
						src={urlFor(el.icon).url()}
						alt={`${el.title} icon`}
						width={20}
						height={20}
					/>
					<p>{el.title}</p>
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
