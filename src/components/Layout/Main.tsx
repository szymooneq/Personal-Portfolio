import { AnimatePresence, motion as m } from 'framer-motion';
import { useRouter } from 'next/router';
import Breadcrumb from '../UI/Breadcrumb/Breadcrumb';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

interface props {
	children: React.ReactNode;
}

function Main({ children }: props): JSX.Element {
	const { asPath, pathname } = useRouter();

	return (
		<>
			{!asPath.includes('studio') && <Navbar />}
			{asPath === '/' || asPath.includes('studio') ? (
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
			)}
			{!asPath.includes('studio') && <Footer />}
		</>
	);
}

export default Main;
