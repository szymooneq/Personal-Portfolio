import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import NextNProgress from 'nextjs-progressbar'
import Breadcrumb from '../UI/Breadcrumb/Breadcrumb'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'

export default function RootLayout({ children }) {
  const { pathname, route } = useRouter()
  
  return (
    <>
      <NextNProgress color="#5d5dff" height={3} />
      <Navbar />
      {pathname !== "/" && pathname !== "/404" && <Breadcrumb />}
        <motion.main key={route} initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} className='app'>
          {children}
        </motion.main>
      <Footer />
    </>
  )
}
