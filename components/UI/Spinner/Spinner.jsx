import styles from './Spinner.module.css'

export default function Spinner() {
  return (
    <div className={styles.center}>
      <div className={styles.spinner} />
    </div>
  )
}
