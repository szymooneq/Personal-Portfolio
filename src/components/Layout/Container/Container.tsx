import { ContainerProps } from './Container.types'
import styles from './Container.module.css'

const Container = ({ children }: ContainerProps): JSX.Element => (
	<div className={styles.container}>{children}</div>
)

export default Container
