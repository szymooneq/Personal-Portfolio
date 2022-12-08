import { motion as m } from "framer-motion";
import Image from "next/image";
import astronaut from "../../assets/astronaut.png";
import { contactLinks } from "../../lib/helpers/contactLinks";
import styles from "./Hero.module.css";
import Starfield from "./Starfield/Starfield";

export default function Hero() {
  return (
    <header className={styles.hero}>
      <Starfield />

      <div className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.primary}>Szymon Dudka</h1>
          <h2 className={styles.secondary}>Frontend Developer</h2>

          <div className={styles.links}>
            {contactLinks.map((link) => (
              <a key={link.name} href={link.url} target="_blank" rel="noreferrer">
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.astronaut}>
          <Image src={astronaut} alt="Astronaut" />
        </div>
      </div>
    </header>
  );
}
