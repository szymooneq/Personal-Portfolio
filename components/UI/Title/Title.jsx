import { motion as m } from 'framer-motion'
import styles from './Title.module.css'

export default function Title({ title }) {
  return (
    <m.header initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { type: "spring", duration: 1} }} className={styles.title}>
      <p className={styles.titleMain}>{title}</p>
      {/* <hr /> */}
    </m.header>
  )
}
