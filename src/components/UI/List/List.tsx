import styles from './List.module.css';

interface props {
	children: React.ReactNode;
	type?: string;
	title?: string;
}

function List({ type, title, children }: props): JSX.Element {
	switch (type) {
		case 'list':
			return (
				<div className={styles.list}>
					<h2>{title}</h2>
					<ul>{children}</ul>
				</div>
			);
		case 'links':
			return <div className={styles.links}>{children}</div>;
		default:
			return (
				<div className={styles.group}>
					<h2>{title}</h2>
					{children}
				</div>
			);
	}
}

export default List;
