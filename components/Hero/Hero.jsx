// import { motion } from "framer-motion"
import Image from 'next/image'
import astronaut from '../../assets/astronaut.png'
import { githubIcon, linkedinIcon } from '../../assets/svgIconsPack'
import styles from './Hero.module.css'
import Starfield from './Starfield/Starfield'

export default function Hero() {
  return (
    <header className={styles.hero}>
      <Starfield />
      <div className={styles.content}>
        <div className={styles.contentMain}>
          <span className={styles.primary}>Szymon Dudka</span>
          <span className={styles.secondary}>Frontend Developer</span>
          <div className={styles.social}>
            <a href="https://www.linkedin.com/in/szymon-dudka" target="_blank" rel="noreferrer">
              {linkedinIcon}
            </a>
            <a href="https://github.com/szymooneq" target="_blank" rel="noreferrer">
              {githubIcon}
            </a>
          </div>
        </div>
        <div className={styles.heroImg}>
          <Image src={astronaut} alt="Astronaut" />
        </div>
      </div>
    </header>
  )
}
