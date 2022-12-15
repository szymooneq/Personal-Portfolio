import Head from 'next/head';
import Link from 'next/link';
import ContentLayout from '../src/components/Layout/ContentLayout';
import styles from '../src/styles/404.module.css';

export default function NotFound() {
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
