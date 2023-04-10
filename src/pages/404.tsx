import Head from 'next/head';
import Link from 'next/link';
import Container from '@/components/Layout/Container/Container';
import styles from '@/styles/404.module.css';

function NotFound(): JSX.Element {
	return (
		<>
			<Head>
				<title>404 | Szymon Dudka</title>
				<meta
					name="description"
					content="The page you are looking for may have been removed, its name changed, or it may be temporarily inaccessible."
				/>
			</Head>

			<Container className={styles.content}>
				<h1>404</h1>
				<p>
					The page you are looking for may have been removed, its name changed,
					or it may be temporarily inaccessible.
				</p>

				<Link href="/" className={styles.backButton}>
					Back to homepage
				</Link>
			</Container>
		</>
	);
}

export default NotFound;
