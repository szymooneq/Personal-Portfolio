import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import TagCloud from 'TagCloud'
import aboutHero from '../../assets/about-hero.svg'
import { contactIcon, downloadIcon } from '../../assets/svgIconsPack'
import Title from '../UI/Title/Title'
import styles from './About.module.css'

export default function About({ title }) {

  useEffect(() => {
    const container = '.tagcloud'
    const texts = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Redux', 'React Router', 'Next.js', 'SASS', 'Tailwind CSS', 'Bootstrap', 'Node.js', 'Firebase', 'MySQL', 'Git', 'GitHub', 'Vercel', 'Netlify', 'npm', 'Figma', 'Adobe Photoshop', 'VSCode', 'eslint', 'prettier']
    const options = { radius: 300 }

    const tagcloud = TagCloud(container, texts, options)

    return () => {
      tagcloud.destroy()
    }
    
  }, [])
  
  return (
    <article className={`container ${styles.section}`}>
      <Title title={title} />
      <section className={styles.content}>

        <motion.div initial={{ x: -300, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { type: "spring", duration: 1, delay: .3} }} className={styles.description}>
          <div className={styles.card}>
            <p className={styles.cardDescription}>
              <b>Hello! I am Szymon 👋</b><br /><br />Some time ago I graduated and became a computer science engineer and started developing my programming and web development skills. I am an ambitious person open to new challenges. I am passionate about programming and I associate my future with it, so I would like to develop further in this direction, learning new things and solutions and gaining new experiences. I believe that there are no things that I could not cope with, because the Internet is a treasury of knowledge and everything can be found in it, so I am able to deal with the problems I encounter by choosing the optimal solution for my goals.
              <span className={styles.cardQuote}>
                Hard work beats talent when talent doesnt work hard -Tim Notke
              </span>
            </p>
          </div>
          <div className={styles.links}>
            <a href="/CV_Szymon_Dudka.pdf" className="button" target="_blank" rel="noreferrer">
              <span>Download my CV</span>
              {downloadIcon}
            </a>
            <Link href="contact" className="button">
              <span>Contact Me</span>
              {contactIcon}
            </Link>
          </div>
        </motion.div>

        <motion.div initial={{ x: 300, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { type: "spring", duration: 1, delay: .3} }} className={styles.graphics}>
          {/* <div className={styles.technologies}></div> */}
          <div className="tagcloud"></div>
        </motion.div>
      </section>
      
      <Image className={styles.aboutImg} src={aboutHero} alt="about-img" />
    </article>
  );
}
