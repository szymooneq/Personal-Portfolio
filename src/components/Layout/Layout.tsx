import { ThemeProvider } from 'next-themes'
import NextNProgress from 'nextjs-progressbar'
import { LayoutProps } from './Layout.types'

import Metadata from '@/components/Layout/Metadata'
import Main from '@/components/Layout/Main'

const NPROGRESS_SETTINGS = {
	color:
		'linear-gradient(to bottom right,#258afe -10.4%,#b69dd7 26.59%,#aa26ff 64.37%,#258afe 109.47%)',
	height: 3,
	options: { showSpinner: false }
}

const Layout = ({ children }: LayoutProps): JSX.Element => (
	<ThemeProvider enableSystem={true}>
		<Metadata />

		<NextNProgress {...NPROGRESS_SETTINGS} />

		<Main>{children}</Main>
	</ThemeProvider>
)

export default Layout
