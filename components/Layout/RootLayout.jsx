import Head from "next/head"
import NextNProgress from "nextjs-progressbar"
import Footer from "./Footer/Footer"
import Main from "./Main"
import Navbar from "./Navbar/Navbar"

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1d1d20" />
        <meta name="msapplication-TileColor" content="#1d1d20" />
        <meta name="theme-color" content="#1d1d20" />
      </Head>
      
      <NextNProgress color="linear-gradient(to bottom right, rgb(93, 93, 255), darkorchid)" height={2} options={{ showSpinner: false }} />
      <Navbar />
        <Main>
          { children }
        </Main>
      <Footer />
    </>
  );
}
