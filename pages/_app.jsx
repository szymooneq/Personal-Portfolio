import RootLayout from "../components/Layout/RootLayout";
import "../styles/App.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;
