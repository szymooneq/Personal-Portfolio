import styles from './Container.module.css';

interface ContainerProps {
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

function Container({
	children,
	header,
	className
}: ContainerProps): JSX.Element {
	return (
		<div className="container">
			{header && <Header title={header} />}
			<article className={className}>{children}</article>
		</div>
	);
}

export default Container;
