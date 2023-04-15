import Link from 'next/link'
import urlFor from '@/lib/sanity/client/urlFor'
import { IPostCard } from '@/lib/interfaces/post'
import styles from './PostCard.module.css'
import Image from 'next/image'

interface props {
	post: IPostCard
}

function PostCard({ post }: props): JSX.Element {
	return (
		<div className={styles.card}>
			<Link href={`/blog/${post.slug.current}`}>
				<div className={styles.content}>
					<Image
						className={styles.img}
						src={urlFor(post.mainImage).url()}
						alt={post.title}
						width={500}
						height={300}
					/>
					<p className={styles.type}>{post.technologies[0].title}</p>
					<div className={styles.info}>
						<div className={styles.title}>
							<h2>{post.title}</h2>
							{/* {rightCircleArrow} */}
						</div>
						<p className={styles.decription}>{post.description}</p>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default PostCard
