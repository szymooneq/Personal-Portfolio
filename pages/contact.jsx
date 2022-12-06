import Head from "next/head";
import Image from "next/image";
import contactImg from "../assets/contact.svg";
import { cubeIcon, githubIcon, layoutIcon, linkedinIcon, penIcon } from "../assets/svgIconsPack";
import Article from "../components/Layout/Article";
import Text from "../components/UI/Text/Text";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Szymon Dudka</title>
        <meta
          name="description"
          content="You can send me a direct message, also you can check my GitHub or LinkedIn profiles."
        />
      </Head>

      <Article header="Contact">
        <div className={styles.content}>
          <div className={styles.description}>
            <div>
              <h1 className={styles.title}>Get in Touch ✨</h1>
              <p className={styles.subText}>
                I’m always open to collaborate on a project or hear about an
                opportunity!
              </p>
            </div>
            <div className={styles.contactTypes}>
              <div>
                <p className={styles.smallTitle}>want to call me?</p>
                <a className={styles.info}>Schedule a call with me</a>
              </div>
              <div>
                <p className={styles.smallTitle}>Just want to email me?</p>
                <a className={styles.info}>szymooneq@zohomail.eu</a>
              </div>
            </div>
            <div className={styles.icons}>
              <a>{linkedinIcon}</a>
              <a>{githubIcon}</a>
            </div>
          </div>

          <form
            className={styles.form}
            action="https://usebasin.com/f/d46c0979603a"
            method="post">
            <div className={styles.field}>
              <input type="text" name="name" placeholder="Name" required />
            </div>

            <div className={styles.field}>
              <input type="email" name="email" placeholder="E-mail" required />
            </div>

            <div className={styles.field}>
              <textarea
                name="message"
                rows="8"
                placeholder="Type your message"
                required
              />
            </div>

            <button type="submit" className={styles.submit}>
              Send Message
            </button>
          </form>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>{layoutIcon}</div>
            <div className={styles.cardTitle}>Website design  & development</div>
            <div className={styles.cardDesc}>Experienced designer & visual developer. I love using tools like Figma and Framer.</div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>{penIcon}</div>
            <div className={styles.cardTitle}>Visual & graphic design</div>
            <div className={styles.cardDesc}>Eye for the visual side of things. I enjoy crafting beautiful illustrations and animations!</div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>{cubeIcon}</div>
            <div className={styles.cardTitle}>Branding</div>
            <div className={styles.cardDesc}>Combining both my visual and analytical side, I love creating brands that not only look great, but sell as well.</div>
          </div>
        </div>
      </Article>
    </>
  );
}
