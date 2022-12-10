import Head from "next/head";
import Link from "next/link";
import {
  leftArrow,
  leftUpArrow,
  linkedinIcon,
  rightArrow,
  rightCircleArrow,
  userFaceID
} from "../assets/svgIconsPack";
import Article from "../components/Layout/Article";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <>
      <Head>
        <title>About me | Szymon Dudka</title>
        <meta name="description" content="" />
      </Head>
      <Article header="About" className={styles.main}>
        <div className={styles.card}></div>
        <div className={styles.card}>
          <h1 className={styles.title}>Hey, I&apos;m Szymon 👋</h1>
          <p className={styles.secondary}>Frontend Developer</p>
        </div>
        <div className={styles.card}>
          <h2>About me</h2>
          <p className={styles.cardDesc}>
            I&apos;m a Frontend Developer. I create websites / web applications
            and I constantly develop my development skills. My goal is to become
            a Fullstack JS Developer.
          </p>
        </div>
        <div className={styles.card}>
          <h2>Skills</h2>
          {/* <p>Revolution Design Lead 2019 -</p>
          <p>Circle UX Designer 2015 - 2019</p>
          <p>Circle UX Designer 2015 - 2019</p> */}
        </div>
        <a
          className={styles.card}
          href="https://www.linkedin.com/in/szymon-dudka"
          target="_blank"
          rel="noreferrer"
          aria-label="Check my profile on LinkedIn">
          <div className={styles.icon}>{linkedinIcon}</div>
          {/* <div className={styles.arrow}>{leftUpArrow}</div> */}
          {/* <div className={styles.cardFlex}>{leftUpArrow}</div> */}
        </a>
        <Link href="contact" className={styles.card}>
          <h2>Let&apos;s work together ✨</h2>
          <div className={styles.cardFlex}>
            <p className={styles.getTouch}>Get in touch now</p>
            {rightCircleArrow}
          </div>
        </Link>
        <Link href="resume" className={styles.card}>
          {userFaceID}
          <p>Learn more about me</p>
          <div className={styles.cardFlex}>
            <h2>See my resume</h2>
            {rightCircleArrow}
          </div>
        </Link>
      </Article>
    </>
  );
}
