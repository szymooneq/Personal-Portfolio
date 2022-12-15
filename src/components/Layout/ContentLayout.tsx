import { ChildrenType } from '../../types/types';
import Header from '../UI/Header/Header';

type ContentLayout = {
	className?: string;
	header?: string;
} & ChildrenType;

export default function ContentLayout({
	children,
	header,
	className
}: ContentLayout) {
	return (
		<article className="container">
			{header && <Header title={header} />}
			<section className={className}>{children}</section>
		</article>
	);
}
