import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { leftUpArrow } from "../assets/svgIconsPack";
import ContentLayout from "../components/Layout/ContentLayout";
import { contactLinks } from "../lib/helpers/contactLinks";
import styles from "../styles/Resume.module.css";

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume | Szymon Dudka</title>
        <meta name="description" content="" />
      </Head>

      <ContentLayout header="Resume" className={styles.main}>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.avatar}>
              <div className={styles.image}>
                <Image
                  src="/avatar.jpg"
                  alt="Avatar"
                  width={420}
                  height={420}
                />
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
            {contactLinks.map((link, id) => (
              <Fragment key={link.name}>
                <div className={styles.link}>
                  <a href={link.url} target="_blank" rel="noreferrer">
                    <div className={styles.linkDesc}>
                      <p>{link.name}</p>
                      {leftUpArrow}
                    </div>
                  </a>
                </div>
                {id !== contactLinks.length - 1 && <hr />}
              </Fragment>
            ))}
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.contentItem}>
            <h1 className={styles.name}>About me</h1>
            <section>
              <p className={styles.sectionDescription}>
                {/* I&apos;m a Frontend Developer. I create websites / web
                applications and I constantly develop my development skills. My
                goal is to become a Fullstack JS Developer. */}
                I love creating websites / web applications. I am ambitious and
                persistent in what I do, I like challenges. I am learning every
                day to deepen my knowledge, acquire new experiences, discover
                new solutions and being better and better in this field. I am
                self-taught, I quickly adapt to new technologies, I pay
                attention to the smallest details.
              </p>
            </section>
          </div>
          <div className={styles.contentItem}>
            <h1 className={styles.name}>Education & Courses</h1>
            <section>
              <div className={styles.sectionItem}>
                <h2>PWSZ (now Academy of Applied Sciences) in Nowy Sącz</h2>
                <p className={styles.sectionTimeline}>Sep 2018 - Jun 2022</p>
                <p className={styles.sectionDescription}>
                  I graduated from applied computer science. I learned the
                  basics of programming, got to know algorithms and data
                  structures, databases. I also learned web fundamentas and
                  created my first projects as part of the classes.
                </p>
              </div>
              <div className={styles.sectionItem}>
                <h2>HTML, CSS and JavaScript</h2>
                <p className={styles.sectionTimeline}>Jul 2022</p>
                <p className={styles.sectionDescription}>
                  I deepened my knowledge of the basics of websites. I learned
                  semantic HTML, positioning elements on the page, units,
                  styling and animations in CSS. I got to know JavaScript
                  syntax, DOM manipulation and Fetch API.
                </p>
              </div>
              <div className={styles.sectionItem}>
                <h2>React Course</h2>
                <p className={styles.sectionTimeline}>Sep 2022</p>
                <p className={styles.sectionDescription}>
                  I completed a React course, got to know components, webpack,
                  JSX and popular hooks offered by the framework, e.g. useState,
                  useEffect, Context, Reducer. In addition, I worked with
                  popular libraries such as React Router or React Query, Redux,
                  Formik and yup. I also learned about server-side rendering
                  using the Next.js framework.
                </p>
              </div>
              <div className={styles.sectionItem}>
                <h2>Bootstrap Course</h2>
                <p className={styles.sectionTimeline}>Sep 2022</p>
                <p className={styles.sectionDescription}>
                  {/* Here is where you can mention what you studied and brief
                  details on what you learnt. You can also mention any
                  extra-curricular activities you did relating to your degree. */}
                </p>
              </div>
              <div className={styles.sectionItem}>
                <h2>Freelancer Course</h2>
                <p className={styles.sectionTimeline}>Sep 2022</p>
                <p className={styles.sectionDescription}>
                  {/* Here is where you can mention what you studied and brief
                  details on what you learnt. You can also mention any
                  extra-curricular activities you did relating to your degree. */}
                </p>
              </div>
            </section>
          </div>
          <div className={styles.contentItem}>
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
          <div className={styles.contentItem}>
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
      </ContentLayout>
    </>
  );
}
