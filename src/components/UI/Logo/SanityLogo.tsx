import { LogoProps } from 'sanity';
import Logo from './Logo';
import styles from './SanityLogo.module.css';

function StudioLogo(props: LogoProps) {
	const { renderDefault } = props;

	return (
		<div className={styles.logo}>
			<Logo />
			{renderDefault && renderDefault(props)}
		</div>
	);
}

export default StudioLogo;
