import RootLayout from '@/components/Layout/RootLayout';
import useFoucFix from '@/lib/helpers/useFoucFix';
import '@/styles/App.css';
import '@/styles/globals.css';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	useFoucFix();

	return (
		<RootLayout>
			<Component {...pageProps} />
		</RootLayout>
	);
}

export default MyApp;
