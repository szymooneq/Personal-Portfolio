import { ProjectTechnology } from '@/interfaces/project';
import urlFor from '@/lib/sanity/client/urlFor';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Technologies.module.css';

interface props {
	technologies: ProjectTechnology[];
}

function Technologies({ technologies }: props): JSX.Element {
	const { query } = useRouter();

	return (
		<div className={styles.technologies}>
			{technologies.map((el) => (
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
					{el.title}
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

export default Technologies;
