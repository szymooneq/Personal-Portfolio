import { useRouter } from 'next/router';
import { ChildrenType } from '../../types/types';
import SideLayout from './SideLayout';

export default function HomeLayout({ children }: ChildrenType): JSX.Element {
	const { pathname, asPath } = useRouter();

	return pathname === '/' ? (
		<main className="app">{children}</main>
	) : (
		<SideLayout pathname={pathname} asPath={asPath}>
			{children}
		</SideLayout>
	);
}
