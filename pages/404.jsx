import Link from "next/link"
import { leftArrow } from '../assets/svgIconsPack'
import styles from '../styles/404.module.css'

export default function NotFound() {
  return (
    <article className="container">
      <section className={styles.content}>
        <span className={styles.number}>404</span>
        <span className={styles.header}>OOPS! PAGE NOT FOUND</span>
        <p className={styles.description}>The page you are looking for might have been removed had its name changed or is temporarily unavaible.</p>

        <Link href="/" className="button">
          {leftArrow}
          <span>Back to homepage</span>
        </Link>
      </section>
    </article>
  )
}
