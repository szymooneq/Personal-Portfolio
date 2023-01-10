import { useRouter } from 'next/router';
import SideLayout from './SideLayout';

interface props {
	children: React.ReactNode;
}

function HomeLayout({ children }: props): JSX.Element {
	const { pathname, asPath } = useRouter();

	return pathname === '/' ? (
		<main className="app">{children}</main>
	) : (
		<SideLayout pathname={pathname} asPath={asPath}>
			{children}
		</SideLayout>
	);
}

export default HomeLayout;
