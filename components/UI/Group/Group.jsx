import { motion as m } from 'framer-motion'
import styles from './Group.module.css'

export default function Group({ type, title, children }) {
  switch (type) {
    case 'list' :
      return (
        <m.div initial={{ y: 200, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }} viewport={{ once: true }} className={styles.list}>
          <h2>{title}</h2>
          <ul>
            {children}
          </ul>
        </m.div>
      )
    case 'links' : 
      return (
        <div className={styles.links}>
          {children}
        </div>
      )
    default:
      return (
        <m.div initial={{ y: 200, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }} viewport={{ once: true }} className={styles.group}>
          <h2>{title}</h2>
          {children}
        </m.div>
      )
  }
}
