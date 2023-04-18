import { ListProps } from './List.types'
import styles from './List.module.css'

const List = ({ type, title, children }: ListProps): JSX.Element =>
	type === 'list' ? (
		<div className={styles.list}>
			<h2>{title}</h2>
			<ul>{children}</ul>
		</div>
	) : (
		<div className={styles.list}>
			<h2>{title}</h2>
			{children}
		</div>
	)

export default List
