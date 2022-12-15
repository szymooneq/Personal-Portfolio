import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { urlFor } from '../../../lib/sanityConfig';
import { ProjectTechnology } from '../../../types/types';
import styles from './Technologies.module.css';

type Technologies = {
	technologies: ProjectTechnology[];
};

export default function Technologies({ technologies }: Technologies) {
	const { query } = useRouter();

	return (
		<div className={styles.technologies}>
			{technologies &&
				technologies.map((el) => (
					<Link
						href={`/projects?category=${el.title}`}
						key={el.title}
						scroll={false}
						className={`button ${query.category === el.title ? 'active' : ''}`}
						aria-label={`Check my ${el.title} projects`}>
						<Image
							src={urlFor(el.icon).url()}
							alt={el.title}
							width={20}
							height={20}
						/>
						{el.title.toUpperCase()}
					</Link>
				))}
			{query.category && (
				<Link href="/projects" scroll={false} className="button reset">
					x reset filter
				</Link>
			)}
		</div>
	);
}
