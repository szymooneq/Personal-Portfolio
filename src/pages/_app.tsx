import { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import useFoucFix from '@/lib/helpers/useFoucFix'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
	useFoucFix()

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}
