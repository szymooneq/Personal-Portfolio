import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './Breadcrumb.module.css'

import Container from '@/components/Layout/Container'

const Breadcrumb = (): JSX.Element => {
	const { asPath } = useRouter()
	const [breadcrumb, setBreadcrumb] = useState<string[]>([])

	useEffect(() => {
		setBreadcrumb(asPath.replace(/\?.*/g, "$'").split('/'))
	}, [asPath])

	return (
		<nav className={styles.breadcrumb}>
			<Container>
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
			</Container>
		</nav>
	)
}

export default Breadcrumb
