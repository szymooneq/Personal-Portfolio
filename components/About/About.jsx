import { motion as m } from 'framer-motion'
import Link from 'next/link'
import { contactIcon, downloadIcon } from '../../assets/svgIconsPack'
import Article from '../../components/Layout/Article'
import Tagcloud from '../UI/Tagcloud/Tagcloud'
import styles from './About.module.css'

export default function About() {
  return (
    <Article header="About Me" style={styles.content}>
      <m.div initial={{ x: -300, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { type: "spring", duration: 1, delay: .3} }} className={styles.flex}>
        <div className={styles.card}>
          <p><b>Hello! I am Szymon 👋</b><br /><br />Some time ago I graduated and became a computer science engineer and started developing my programming and web development skills. I am an ambitious person open to new challenges. I am passionate about programming and I associate my future with it, so I would like to develop further in this direction, learning new things and solutions and gaining new experiences. I believe that there are no things that I could not cope with, because the Internet is a treasury of knowledge and everything can be found in it, so I am able to deal with the problems I encounter by choosing the optimal solution for my goals.</p>
          <span className={styles.quote}>
            Hard work beats talent when talent doesnt work hard -Tim Notke
          </span>
        </div>
        
        <div className={styles.links}>
          <a href="/CV_Szymon_Dudka.pdf" className="button" target="_blank" rel="noreferrer">
            Download my CV{downloadIcon}
          </a>
          <Link href="contact" className="button">
            Contact Me{contactIcon}
          </Link>
        </div>
      </m.div>

      <m.div initial={{ x: 300, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { type: "spring", duration: 1, delay: .3} }} className={styles.center}>
        <Tagcloud />
      </m.div>
    </Article>
  )
}
