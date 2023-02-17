import urlFor from '@/lib/sanity/client/urlFor';
import Link from 'next/link';
import { rightCircleArrow } from '../Svg/SvgIcons';
import styles from './ProjectCard.module.css';

// TODO: post interface

export default function PostCard({ post }: any): JSX.Element {
	return (
		<div className={styles.card}>
			<Link href={`/blog/${post.slug.current}`}>
				<div className={styles.content}>
					<img
						className={styles.img}
						src={urlFor(post.mainImage).url()}
						alt={`Preview image of "${post.title}" post`}
					/>
					<div className={styles.info}>
						<p className={styles.type}>{post.technologies[0].title}</p>
						<div className={styles.title}>
							<h2>{post.title}</h2>
							{rightCircleArrow}
						</div>
						<p className={styles.decription}>{post.description}</p>
					</div>
				</div>
			</Link>
		</div>
	);
}