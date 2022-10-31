import { useRouter } from 'next/router'
import NextNProgress from 'nextjs-progressbar'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

export default function Layout({ children }) {
  const { pathname } = useRouter()
  console.log(pathname)
  return (
    <>
      <NextNProgress color="#5d5dff" height={2} />
      <Navbar />
      {pathname !== "/" && <Breadcrumb />}
      <div className='app'>
        {children}
      </div>
      <Footer />
    </>
  )
}
