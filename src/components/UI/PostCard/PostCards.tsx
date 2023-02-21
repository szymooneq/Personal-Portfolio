import { IPostCard } from '@/lib/interfaces/post';
import PostCard from './PostCard';
import styles from './ProjectCard.module.css';

interface props {
	postList: IPostCard[];
}

function PostCards({ postList }: props): JSX.Element {
	return (
		<div className={styles.grid}>
			{postList.map((post) => (
				<PostCard key={post.title} post={post} />
			))}
		</div>
	);
}

export default PostCards;
