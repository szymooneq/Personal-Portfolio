import Link from 'next/link'
import { BackButtonProps } from './ReturnButton.types'
import styles from './ReturnButton.module.css'

const ReturnButton = ({ href }: BackButtonProps): JSX.Element => (
	<Link href={href} scroll={false} className={styles.returnButton}>
		Go back
	</Link>
)

export default ReturnButton
