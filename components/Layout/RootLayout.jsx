import { motion } from "framer-motion"
import { NextSeo } from "next-seo"
import Head from "next/head"
import { useRouter } from "next/router"
import NextNProgress from "nextjs-progressbar"
import Breadcrumb from "../UI/Breadcrumb/Breadcrumb"
import Footer from "./Footer/Footer"
import Navbar from "./Navbar/Navbar"

export default function RootLayout({ children }) {
  const { pathname, route } = useRouter();

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
      {pathname !== "/" && pathname !== "/404" && <Breadcrumb />}
      <motion.main
        key={route}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        className="app">
        {children}
      </motion.main>
      <Footer />
    </>
  );
}
