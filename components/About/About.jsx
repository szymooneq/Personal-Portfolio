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
          <p><b>Hello! I am Szymon 👋</b><br /><br />I am pleased to welcome you on my personal portfolio website. My name is Szymon Dudka and I am a Front-end developer. Programming is my passion. I would like to become a Full-stack developer in the future. I am an ambitious, persistent person, I like new challenges and I pursue my goals. By searching the Internet, watching YouTube videos or reading technological documentation, I constantly develop my skills and gain new experience. <br /><br />You can find the result of my work on the projects page. I tried to make every project with attention to detail and describe it properly. If you like them, you can contact with me via the form available on the website. Also you can check my profile on LinkedIn or GitHub. <br /><br />Thank you! 😊</p>
          <span className={styles.quote}>
            &ldquo;If you get up in the morning and think the future is going to be better, it is a bright day. Otherwise, it&apos;s not.&ldquo; -Elon Musk
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
