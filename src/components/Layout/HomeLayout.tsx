import { useRouter } from 'next/router';
import { ChildrenType } from '../../types/types';
import SideLayout from './SideLayout';

type HomeLayout = {
	children: React.ReactNode;
};

export default function HomeLayout({ children }: ChildrenType) {
	const { pathname, asPath } = useRouter();

	return pathname === '/' ? (
		<main className="app">{children}</main>
	) : (
		<SideLayout pathname={pathname} asPath={asPath}>
			{children}
		</SideLayout>
	);
}
