import Link from 'next/link'
import { BackButtonProps } from './Return.types'
import styles from './Return.module.css'

const Return = ({ href }: BackButtonProps): JSX.Element => (
	<Link href={href} scroll={false} className={styles.returnButton}>
		Go back
	</Link>
)

export default Return
