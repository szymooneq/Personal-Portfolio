import { AnimatePresence, motion as m } from 'framer-motion';
import { usePageTransitionFix } from '../../lib/helpers/usePageTransitionFix';
import { ChildrenType } from '../../types/types';
import Breadcrumb from '../UI/Breadcrumb/Breadcrumb';

type SideLayout = {
	pathname: string;
	asPath: string;
} & ChildrenType;

export default function SideLayout({ pathname, asPath, children }: SideLayout) {
	usePageTransitionFix();

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
