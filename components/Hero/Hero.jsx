import { motion } from "framer-motion"
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
          <motion.span 
            animate={{ y: [-100, 0, 0], opacity: [0, 1, 1], skewY: [10, 0, 0], skewX: [10, 0, 0], rotateZ: [30, 0, 0] }} 
            transition={{ type: "spring", duration: 2, delay: 1}} 
            className={styles.primary}>Szymon Dudka</motion.span>
          <motion.span animate={{ y: [-100, 0], opacity: [0, 1] }} transition={{ type: "spring", duration: 1, delay: 1.5 }} className={styles.secondary}>Frontend Developer</motion.span>
          <motion.div animate={{ scale: [0, 1], opacity: [0, 1] }} transition={{ type: "spring", delay: 2 }} className={styles.social}>
            <motion.a animate={{ scale: [1, 1.5, 1] }} transition={{ type: "spring", delay: 2.5 }} href="https://www.linkedin.com/in/szymon-dudka" target="_blank" rel="noreferrer">
              {linkedinIcon}
            </motion.a>
            <motion.a animate={{ scale: [1, 1.5, 1] }} transition={{ type: "spring", delay: 3 }} href="https://github.com/szymooneq" target="_blank" rel="noreferrer">
              {githubIcon}
            </motion.a>
          </motion.div>
        </div>

        <motion.div animate={{ scale: [0, 1], opacity: [0, 1] }} transition={{ duration: 4 }} className={styles.heroImg}>
          <Image src={astronaut} alt="Astronaut" />
        </motion.div>
      </div>
    </header>
  )
}
