import { AnimatePresence, motion as m } from 'framer-motion';
import useFoucFix from '../../lib/helpers/useFoucFix';
import Breadcrumb from '../UI/Breadcrumb/Breadcrumb';

interface props {
	children: React.ReactNode;
	pathname: string;
	asPath: string;
}

function SideLayout({ pathname, asPath, children }: props): JSX.Element {
	useFoucFix();

	return (
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

export default SideLayout;
