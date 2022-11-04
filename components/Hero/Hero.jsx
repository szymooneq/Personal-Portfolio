import { motion as m } from "framer-motion"
import Image from 'next/image'
import astronaut from '../../assets/astronaut.png'
import { githubIcon, linkedinIcon } from '../../assets/svgIconsPack'
import styles from './Hero.module.css'
import Starfield from './Starfield/Starfield'

export default function Hero() {
  const links = [{ path: "https://www.linkedin.com/in/szymon-dudka", icon: linkedinIcon }, { path: "https://github.com/szymooneq", icon: githubIcon }]
  
  return (
    <header className={styles.hero}>
      <Starfield />
      
      <div className={styles.flex}>
        <div className={styles.content}>
          <m.span animate={{ y: [-100, 0, 0], opacity: [0, 1, 1] }} transition={{ type: "spring", duration: 2, delay: 1}} className={styles.primary}>Szymon Dudka</m.span>
          <m.span animate={{ y: [100, 0], opacity: [0, 1] }} transition={{ type: "spring", duration: 1, delay: 1.5 }} className={styles.secondary}>Frontend Developer</m.span>
          
          <m.div animate={{ scale: [0, 1], opacity: [0, 1] }} transition={{ type: "spring", delay: 2 }} className={styles.links}>
            {links.map((link, id) => (
              <m.a key={id} animate={{ scale: [1, 1.5, 1] }} transition={{ type: "spring", delay: 2.5 }} href={link.path} target="_blank" rel="noreferrer">
                {link.icon}
              </m.a>
            ))}
          </m.div>
        </div>

        <m.div animate={{ scale: [0, 1], opacity: [0, 1] }} transition={{ type: "spring", duration: 4 }} className={styles.astronaut}>
          <Image src={astronaut} alt="Astronaut" />
        </m.div>
      </div>

      <div className={styles.scrollDown}>
        <div className={styles.scrollDownCircle}></div>
      </div>
      
    </header>
  )
}
