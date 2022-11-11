import RootLayout from '../components/Layout/RootLayout'
import { usePageTransitionFix } from '../lib/use-page-transition-fix'
import '../styles/App.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  usePageTransitionFix()
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>)
}

export default MyApp
