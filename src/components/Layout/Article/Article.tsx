import styles from './Article.module.css';

interface Article {
	children: React.ReactNode;
	className?: string;
	header?: string;
}

interface Header {
	title: string;
}

function Header({ title }: Header): JSX.Element {
	return (
		<header className={styles.title}>
			<h1>{title}</h1>
		</header>
	);
}

function Article({ children, header, className }: Article): JSX.Element {
	return (
		<article className="container">
			{header && <Header title={header} />}
			<section className={className}>{children}</section>
		</article>
	);
}

export default Article;
