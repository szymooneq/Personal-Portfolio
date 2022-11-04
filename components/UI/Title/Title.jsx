import styles from './Title.module.css';

export default function Title({ title }) {
  return (
    <header className={styles.title}>
      <p className={styles.titleMain}>{title}</p>
      {/* <hr /> */}
    </header>
  )
}
