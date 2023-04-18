import { useRouter } from 'next/router'
import { AnimatePresence, motion as m } from 'framer-motion'
import { MainProps } from './Main.types'
import Navbar from '@/components/Layout/Navbar'
import Footer from '@/components/Layout/Footer'
import Breadcrumb from '@/components/UI/Breadcrumb/Breadcrumb'

const Main = ({ children }: MainProps): JSX.Element => {
	const { asPath, pathname } = useRouter()

	return (
		<>
			{!asPath.includes('studio') ? <Navbar /> : null}
			{asPath === '/' || asPath.includes('studio') ? (
				<main>{children}</main>
			) : (
				<>
					<Breadcrumb />
					<AnimatePresence mode="wait">
						<m.main
							key={pathname}
							initial={{ y: 200, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: 200, opacity: 0 }}
							transition={{ duration: 1 }}>
							{children}
						</m.main>
					</AnimatePresence>
				</>
			)}
			{asPath !== '/' && !asPath.includes('studio') ? <Footer /> : null}
		</>
	)
}

export default Main
