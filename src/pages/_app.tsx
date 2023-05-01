import { AppProps } from 'next/app'
import useFoucFix from '@/lib/helpers/useFoucFix'
import '@/styles/globals.css'

import Layout from '@/components/Layout'

export default function App({ Component, pageProps }: AppProps) {
	useFoucFix()

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}
