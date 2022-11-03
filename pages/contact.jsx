import Title from '../components/UI/Title/Title'
import styles from '../styles/Contact.module.css'

export default function Contact() {
  return (
    <article className="container">
      <Title title="Contact" />
      <section className={styles.content}>
        
        <form className={styles.form} action="https://usebasin.com/f/d46c0979603a" method="post">
          <div className={`${styles.formField} ${styles.formGradient}`}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" required />
          </div>

          <div className={`${styles.formField} ${styles.formGradient}`}>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" required />
          </div>
          
          <div className={`${styles.formField} ${styles.formGradient}`}>
            <label htmlFor="message">Message</label>
            <textarea name="message" cols="30" rows="8" />
          </div>
          
          <button type="submit" className={styles.formSubmit}>Submit</button>
        </form>
      </section>
    </article>
  )
}
