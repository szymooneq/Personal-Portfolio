import Link from 'next/link'
import { BackButtonProps } from './BackButton.types'
import styles from './BackButton.module.css'

const BackButton = ({ href }: BackButtonProps): JSX.Element => (
	<Link href={href} scroll={false} className={styles.backButton}>
		Go back
	</Link>
)

export default BackButton
