import Image from 'next/image'
import Link from 'next/link'
import aboutHero from '../../assets/about-hero.svg'
// import CV from '../../assets/CV_Szymon_Dudka.pdf'
import { contactIcon, downloadIcon } from '../../assets/svgIconsPack'
import { urlFor } from '../../sanity'
import Header from '../UI/Header/Header'
import styles from './About.module.css'

export default function About() {
  return (
    <article className={`container ${styles.section}`}>
      <Header title="Who Am I?" />
      <section className={styles.content}>
        <div className={styles.description}>
          <div className={styles.card}>
            <p className={styles.cardDescription}>
              <b>Hey, nice to welcome you to my portfolio page! I am Szymon and I am a junior frontend developer.</b><br /><br />Some time ago I graduated and became a computer science engineer and started developing my programming and web development skills. I am an ambitious person open to new challenges. I am passionate about programming and I associate my future with it, so I would like to develop further in this direction, learning new things and solutions and gaining new experiences. I believe that there are no things that I could not cope with, because the Internet is a treasury of knowledge and everything can be found in it, so I am able to deal with the problems I encounter by choosing the optimal solution for my goals.
              <span className={styles.cardQuote}>
                Hard work beats talent when talent doesnt work hard -Tim Notke
              </span>
            </p>
          </div>
          <div className={styles.links}>
            <Link href="" className="button" target="_blank" rel="noreferrer">
              <span>Download my CV</span>
              {downloadIcon}
            </Link>
            <Link href="contact" className="button">
              <span>Contact Me</span>
              {contactIcon}
            </Link>
          </div>
        </div>
        <div className={styles.graphics}>
          <Image className={styles.aboutImg} src={aboutHero} alt="about-img" />
          {/* <div className={styles.technologies}></div> */}
        </div>
      </section>
    </article>
  );
}
