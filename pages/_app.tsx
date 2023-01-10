import { AppProps } from 'next/app';
import RootLayout from '../src/components/Layout/RootLayout';
import useFoucFix from '../src/lib/helpers/useFoucFix';
import '../src/styles/App.css';
import '../src/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	useFoucFix();

	return (
		<RootLayout>
			<Component {...pageProps} />
		</RootLayout>
	);
}

export default MyApp;
