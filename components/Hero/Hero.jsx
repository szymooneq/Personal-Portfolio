import { motion as m } from "framer-motion";
import Image from "next/image";
import astronaut from "../../assets/astronaut.png";
import { githubIcon, linkedinIcon } from "../../assets/svgIconsPack";
import styles from "./Hero.module.css";
import Starfield from "./Starfield/Starfield";

export default function Hero() {
  const links = [
    { path: "https://www.linkedin.com/in/szymon-dudka", icon: linkedinIcon },
    { path: "https://github.com/szymooneq", icon: githubIcon }
  ];

  return (
    <header className={styles.hero}>
      <Starfield />

      <div className={styles.flex}>
        <div className={styles.content}>
          <h1 className={styles.primary}>Szymon Dudka</h1>
          <h2 className={styles.secondary}>Frontend Developer</h2>

          <div className={styles.links}>
            {links.map((link, id) => (
              <a key={id} href={link.path} target="_blank" rel="noreferrer">
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
