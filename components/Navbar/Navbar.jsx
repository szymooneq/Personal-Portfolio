import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Logo from '../UI/Logo/Logo'
import styles from './Navbar.module.css'

export default function Navbar() {
  const { pathname } = useRouter()
  const [sticky, setSticky] = useState(true)
  const [expandNavbar, setExpandNavbar] = useState(false)
  const menuItems = [{title: 'Home', path: '/'}, {title: 'Projects', path: '/projects'}, {title: 'Contact', path: '/contact'}]

  const handleToggle = () => {
    setExpandNavbar(prev => !prev)
  }

  const handleResize = () => {
    if (window.innerWidth > 768) setExpandNavbar(false)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', (e) => {
      if(window.scrollY < document.querySelector("#starfield")?.offsetHeight - 80) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    })
  }, [sticky])
  
  useEffect(() => {
    setExpandNavbar(false)
    if(pathname === "/" ) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }, [pathname])

  return (
    <nav className={`${styles.nav} ${sticky && styles.hero}`}>
      <Link href="/">
        <Logo />
      </Link>
      
      <div style={expandNavbar ? {display: "block"} : {display: "none"}} className={styles.blackBackground} onClick={handleToggle}></div>
      <div className={`${styles.menu} ${expandNavbar && styles.active}`}>
        <Logo />
        <ul className={styles.menuItems}>
          {menuItems.map(({title, path}) => (
            <li key={title} className={styles.menuItemsLink}>
              <Link href={path}>{title}</Link>
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
