import { AppProps } from 'next/app'
import useFoucFix from '@/lib/helpers/useFoucFix'
import Layout from '@/components/Layout'
import '@/styles/globals.css'

// TODO: remove useFoucFix
export default function App({ Component, pageProps }: AppProps) {
	useFoucFix()

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}
