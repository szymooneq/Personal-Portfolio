import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './Breadcrumb.module.css';

interface props {
	asPath: string;
}

function Breadcrumb({ asPath }: props): JSX.Element {
	const [breadcrumb, setBreadcrumb] = useState<string[]>([]);

	useEffect(() => {
		setBreadcrumb(asPath.replace(/\?.*/g, "$'").split('/'));
	}, [asPath]);

	return (
		<nav className={styles.breadcrumb}>
			<div className="container">
				{breadcrumb.map((path, id) => (
					<span key={id}>
						{id !== breadcrumb.length - 1 ? (
							<>
								<Link href={`/${path}`} className={styles.link}>
									{id === 0 ? 'home' : path}
								</Link>
								<span className={styles.active}> / </span>
							</>
						) : (
							<span className={styles.active}>{path.replace(/-/g, ' ')}</span>
						)}
					</span>
				))}
			</div>
		</nav>
	);
}

export default Breadcrumb;
