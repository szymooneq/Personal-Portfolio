import Layout from '../components/Layout/Layout'
import '../styles/App.css'
import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>)
}

export default MyApp
