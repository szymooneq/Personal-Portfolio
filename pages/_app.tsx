import { AppProps } from 'next/app';
import RootLayout from '../src/components/Layout/RootLayout';
import '../src/styles/App.css';
import '../src/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<RootLayout>
			<Component {...pageProps} />
		</RootLayout>
	);
}

export default MyApp;
