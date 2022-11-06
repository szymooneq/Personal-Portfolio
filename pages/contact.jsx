import Image from 'next/image'
import contactImg from '../assets/contact.svg'
import Article from '../components/Layout/Article'
import Text from '../components/UI/Text/Text'
import styles from '../styles/Contact.module.css'

export default function Contact() {
  return (
    <Article header="Contact">
      <Text align="center">You can send me a direct message, also you can check my GitHub or LinkedIn profiles.</Text>
      
      <div className={styles.flex}>
        <div className={styles.image}>
          <Image src={contactImg} alt="Contact Image" />
        </div>

        <form className={styles.form} action="https://usebasin.com/f/d46c0979603a" method="post">
          <div className={styles.field}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" required />
          </div>

          <div className={styles.field}>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" required />
          </div>
          
          <div className={styles.field}>
            <label htmlFor="message">Message</label>
            <textarea name="message" rows="8" required />
          </div>
          
          <button type="submit" className={styles.submit}>Send a message</button>
        </form>
      </div>
    </Article>
  )
}
