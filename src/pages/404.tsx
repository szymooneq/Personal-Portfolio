import ContentLayout from '@/components/Layout/ContentLayout';
import styles from '@/styles/404.module.css';
import Head from 'next/head';
import Link from 'next/link';

function NotFound(): JSX.Element {
	return (
		<>
			<Head>
				<title>404 | Szymon Dudka</title>
				<meta
					name="description"
					content="The page you are looking for might have been removed had its name changed or is temporarily unavaible."
				/>
			</Head>

			<ContentLayout className={styles.content}>
				<h1>404</h1>
				<p>
					The page you are looking for might have been removed had its name
					changed or is temporarily unavaible.
				</p>

				<Link href="/" className={styles.backButton}>
					Back to homepage
				</Link>
			</ContentLayout>
		</>
	);
}

export default NotFound;
