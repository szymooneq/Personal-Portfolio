import styles from './Header.module.css';

export default function Header({ title }) {
  return (
    <header className={styles.title}>
      <p className={styles.titleMain}>{title}</p>
    </header>
  )
}
