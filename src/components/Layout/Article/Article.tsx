import styles from './Article.module.css';

interface ArticleProps {
	children: React.ReactNode;
	className?: string;
	header?: string;
}

interface HeaderProps {
	title: string;
}

function Header({ title }: HeaderProps): JSX.Element {
	return (
		<header className={styles.title}>
			<h1>{title}</h1>
		</header>
	);
}

function Article({ children, header, className }: ArticleProps): JSX.Element {
	return (
		<article className="container">
			{header && <Header title={header} />}
			<section className={className}>{children}</section>
		</article>
	);
}

export default Article;
