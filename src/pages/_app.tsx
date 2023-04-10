import { AppProps } from 'next/app';
import useFoucFix from '@/lib/helpers/useFoucFix';
import RootLayout from '@/components/Layout/RootLayout';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	useFoucFix();

	return (
		<RootLayout>
			<Component {...pageProps} />
		</RootLayout>
	);
}

export default MyApp;
