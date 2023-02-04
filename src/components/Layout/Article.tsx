import Header from '../UI/Header/Header';

interface props {
	children: React.ReactNode;
	className?: string;
	header?: string;
}

function Article({ children, header, className }: props): JSX.Element {
	return (
		<article className="container">
			{header && <Header title={header} />}
			<section className={className}>{children}</section>
		</article>
	);
}

export default Article;
