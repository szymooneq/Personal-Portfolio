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
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1D1D20" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      
      <NextNProgress color="#5d5dff" height={3} />
      <Navbar />
        <Main>
          { children }
        </Main>
      <Footer />
    </>
  );
}
