import { ChildrenType } from '../../../types/types';
import styles from './Group.module.css';

type Group = {
	type?: string;
	title?: string;
} & ChildrenType;

export default function Group({ type, title, children }: Group) {
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
