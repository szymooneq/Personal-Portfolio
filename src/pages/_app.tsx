import { AppProps } from 'next/app'
// import useFoucFix from '@/lib/helpers/useFoucFix'
import RootLayout from '@/components/Layout/RootLayout'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
	// useFoucFix();

	return (
		<RootLayout>
			<Component {...pageProps} />
		</RootLayout>
	)
}
