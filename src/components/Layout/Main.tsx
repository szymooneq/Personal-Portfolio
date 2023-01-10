import { AnimatePresence, motion as m } from 'framer-motion';
import { useRouter } from 'next/router';
import Breadcrumb from '../UI/Breadcrumb/Breadcrumb';

interface props {
	children: React.ReactNode;
}

function Main({ children }: props): JSX.Element {
	const { pathname, asPath } = useRouter();

	return pathname === '/' ? (
		<main className="app">{children}</main>
	) : (
		<>
			<Breadcrumb asPath={asPath} />
			<AnimatePresence mode="wait">
				<m.main
					key={pathname}
					initial={{ y: 200, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: 200, opacity: 0 }}
					transition={{ duration: 0.7 }}
					className="app">
					{children}
				</m.main>
			</AnimatePresence>
		</>
	);
}

export default Main;
