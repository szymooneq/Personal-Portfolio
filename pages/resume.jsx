import Image from "next/image";
import Link from "next/link";
import { leftUpArrow } from "../assets/svgIconsPack";
import Article from "../components/Layout/Article";
import styles from "../styles/Resume.module.css";

export default function about() {
  return (
    <Article header="Resume" style={styles.main}>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.avatar}>
            <div className={styles.image}>
              <Image src="/avatar.jpg" alt="Avatar" width={420} height={420} />
            </div>
            <div className={styles.whatsUp}>What&apos;s up!</div>
          </div>
          <h1 className={styles.name}>Szymon Dudka</h1>
          <h2 className={styles.work}>Frontend Developer</h2>
          <div className={styles.contacts}>
            <p>szymooneq@zohomail.eu</p>
            <p>www.szymondudka.xyz</p>
          </div>
          <Link className={styles.contactMe} href={"contact"}>
            Contact Me
          </Link>
        </div>
        <div className={styles.card}>
          <div className={styles.link}>
            <a href="#">
              <div className={styles.linkDesc}>
                <p>LinkedIn</p>
                {leftUpArrow}
              </div>
            </a>
          </div>
          <hr />
          <div className={styles.link}>
            <a href="#">
              <div className={styles.linkDesc}>
                <p>GitHub</p>
                {leftUpArrow}
              </div>
            </a>
          </div>
          <hr />
          <div className={styles.link}>
            <a href="#">
              <div className={styles.linkDesc}>
                <p>Discord</p>
                {leftUpArrow}
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div>
          <h1 className={styles.name}>About me</h1>
          <section>
            <p className={styles.sectionDescription}>
              I&apos;m a multi-disciplinary Product Designer, specialising in
              no-code and visual development. Currently Design Lead @
              Revolution. Take a look below!
            </p>
          </section>
        </div>
        <div>
          <h1 className={styles.name}>Education & Courses</h1>
          <section>
            <div className={styles.sectionItem}>
              <h2>PWSZ Nowy Sącz</h2>
              <p className={styles.sectionItemTimeline}>Sep 2019 - Jun 2022</p>
              <p className={styles.sectionDescription}>
                Here is where you can mention what you studied and brief details
                on what you learnt. You can also mention any extra-curricular
                activities you did relating to your degree.
              </p>
            </div>
            <div className={styles.sectionItem}>
              <h2>React Course</h2>
              <p className={styles.sectionItemTimeline}>Sep 2022</p>
              <p className={styles.sectionDescription}>
                Here is where you can mention what you studied and brief details
                on what you learnt. You can also mention any extra-curricular
                activities you did relating to your degree.
              </p>
            </div>
            <div className={styles.sectionItem}>
              <h2>Bootstrap Course</h2>
              <p className={styles.sectionItemTimeline}>Sep 2022</p>
              <p className={styles.sectionDescription}>
                Here is where you can mention what you studied and brief details
                on what you learnt. You can also mention any extra-curricular
                activities you did relating to your degree.
              </p>
            </div>
            <div className={styles.sectionItem}>
              <h2>Freelancer Course</h2>
              <p className={styles.sectionItemTimeline}>Sep 2022</p>
              <p className={styles.sectionDescription}>
                Here is where you can mention what you studied and brief details
                on what you learnt. You can also mention any extra-curricular
                activities you did relating to your degree.
              </p>
            </div>
            <div className={styles.sectionItem}>
              <h2>Node.js Course</h2>
              <p className={styles.sectionItemTimeline}>Sep 2022</p>
              <p className={styles.sectionDescription}>
                Here is where you can mention what you studied and brief details
                on what you learnt. You can also mention any extra-curricular
                activities you did relating to your degree.
              </p>
            </div>
          </section>
        </div>
        <div>
          <h1 className={styles.name}>Skills</h1>
          <section>
            <div className={styles.skillsItem}>
              <p className={styles.sectionDescription}>Basics</p>
              <div>
                <p className={styles.sectionDescription}>HTML</p>
                <p className={styles.sectionDescription}>CSS</p>
                <p className={styles.sectionDescription}>JavaScript</p>
                <p className={styles.sectionDescription}>TypeScript</p>
              </div>
            </div>
            <div className={styles.skillsItem}>
              <p className={styles.sectionDescription}>Stack</p>
              <div>
                <p className={styles.sectionDescription}>React</p>
                <p className={styles.sectionDescription}>Next.js</p>
                <p className={styles.sectionDescription}>React Router</p>
                <p className={styles.sectionDescription}>React Query</p>
                <p className={styles.sectionDescription}>REST API</p>
              </div>
            </div>
            <div className={styles.skillsItem}>
              <p className={styles.sectionDescription}>Styling</p>
              <div>
                <p className={styles.sectionDescription}>Tailwind</p>
                <p className={styles.sectionDescription}>Bootstrap</p>
                <p className={styles.sectionDescription}>SASS</p>
                <p className={styles.sectionDescription}>styled-components</p>
                <p className={styles.sectionDescription}>RWD</p>
              </div>
            </div>
            <div className={styles.skillsItem}>
              <p className={styles.sectionDescription}>Database</p>
              <div>
                <p className={styles.sectionDescription}>MySQL</p>
                <p className={styles.sectionDescription}>Firebase</p>
              </div>
            </div>
            <div className={styles.skillsItem}>
              <p className={styles.sectionDescription}>Tools</p>
              <div>
                <p className={styles.sectionDescription}>Git</p>
                <p className={styles.sectionDescription}>Figma</p>
                <p className={styles.sectionDescription}>Photoshop</p>
                <p className={styles.sectionDescription}>VSCode</p>
              </div>
            </div>
          </section>
        </div>
        <div>
          <h1 className={styles.name}>Interests</h1>
          <section>
            <div className={styles.skillsItem}>
              <p className={styles.sectionDescription}>Travel</p>
              <p className={styles.sectionDescription}>Gaming</p>
            </div>
            <div className={styles.skillsItem}>
              <p className={styles.sectionDescription}>Web Design</p>
              <p className={styles.sectionDescription}>UX Design</p>
            </div>
            <div className={styles.skillsItem}>
              <p className={styles.sectionDescription}>Technology</p>
              <p className={styles.sectionDescription}>Astronomy</p>
            </div>
            <div className={styles.skillsItem}>
              <p className={styles.sectionDescription}>Photography</p>
              <p className={styles.sectionDescription}>Football</p>
            </div>
          </section>
        </div>
      </div>
    </Article>
  );
}
