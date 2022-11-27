import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { throttle } from '../../../lib/helpers/throttle'
import Logo from '../../UI/Logo/Logo'
import styles from './Navbar.module.css'

export default function Navbar() {
  const { pathname } = useRouter()
  const [navbarOnTop, setNavbarOnTop] = useState(true)
  const [expandNavbar, setExpandNavbar] = useState(false)
  const menuItems = [{title: 'Home', path: '/'}, {title: 'Projects', path: '/projects'}, {title: 'Contact', path: '/contact'}]

  const handleToggle = () => {
    setExpandNavbar(prev => !prev)
  }

  const handleResize = throttle(() => {
    if (window.innerWidth > 768) setExpandNavbar(false)
  }, 300)

  const handleScroll = throttle(() => {
    if(window.scrollY < document.querySelector("#starfield")?.offsetHeight - 70) {
      setNavbarOnTop(true)
    } else {
      setNavbarOnTop(false)
    }
  }, 300)

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [navbarOnTop])
  
  useEffect(() => {
    if(pathname === "/" ) {
      setNavbarOnTop(true)
      window.addEventListener('scroll', handleScroll)
    } else {
      setNavbarOnTop(false)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [pathname])

  return (
    <nav className={`${styles.nav} ${navbarOnTop && styles.hero}`}>
      <Link href="/">
        <Logo />
      </Link>
      
      <div style={expandNavbar ? {display: "block"} : {display: "none"}} className={styles.blackBackground} onClick={handleToggle}></div>
      <div className={`${styles.menu} ${expandNavbar && styles.active}`}>
        <Logo />
        <ul className={styles.menuItems}>
          {menuItems.map(({title, path}) => (
            <li key={title} className={styles.menuItemsLink}>
              <Link href={path} onClick={() => setExpandNavbar(false)}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <button className={`${styles.burger} ${expandNavbar && styles.active}`} onClick={handleToggle}>
        <span />
        <span />
        <span />
      </button>
    </nav>
  )
}
