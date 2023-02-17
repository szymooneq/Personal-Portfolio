import PostCard from './PostCard';
import styles from './ProjectCard.module.css';

interface props {
	postList: any;
}

// TODO: post interface

function PostCards({ postList }: props): JSX.Element {
	return (
		<div className={styles.grid}>
			{postList.map((post: any) => (
				<PostCard key={post.title} post={post} />
			))}
		</div>
	);
}

export default PostCards;