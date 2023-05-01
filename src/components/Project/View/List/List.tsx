import { ListProps } from './List.types'
import styles from './List.module.css'

const List = ({ type, title, children }: ListProps): JSX.Element => (
	<div className={styles.list}>
		<h2>{title}</h2>
		{type === 'list' ? <ul>{children}</ul> : children}
	</div>
)

export default List
