import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.content} container`}>
        <span>Feel free to get in touch and stay connected with me via these different channels.</span>
        <div className={styles.links}>
          <a href="https://www.linkedin.com/in/szymon-dudka" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/szymooneq" target="_blank" rel="noreferrer">GitHub</a>
          <Link href="contact">Mail</Link>
        </div>
        <p className={styles.copyright}>&copy; | 2022 Szymon Dudka</p>
      </div>
    </footer>
  )
}
