import { LogoProps } from 'sanity'
import styles from './SanityLogo.module.css'

import Logo from '@/components/UI/Logo'

const SanityLogo = (props: LogoProps) => {
	const { renderDefault } = props

	return (
		<div className={styles.logo}>
			<Logo />
			{renderDefault ? renderDefault(props) : null}
		</div>
	)
}

export default SanityLogo
