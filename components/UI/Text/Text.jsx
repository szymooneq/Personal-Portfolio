import { motion as m } from 'framer-motion'
import styles from './Text.module.css'

export default function Text({ align, children }) {
  return (
    <m.p initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }} viewport={{ once: true }} className={styles.description} style={{ textAlign: align }}>{children}</m.p>
  )
}
