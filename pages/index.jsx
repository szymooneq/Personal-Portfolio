import About from '../components/About/About';
import Featured from '../components/Featured/Featured';
import Hero from '../components/Hero/Hero';
import { getAllProjects } from '../lib/projects';
import styles from '../styles/Home.module.css';

export default function Home({ allProjects }) {
  return (
    <>
      <Hero />
      {/* <div className={styles.container}> */}
        <About projects={allProjects} />
        <Featured projects={allProjects} />
      {/* </div> */}
    </>
  )
}

export async function getStaticProps() {
  const allProjects = await getAllProjects()
  // console.log(allProjects)

  return {
    props: {
      allProjects
    }
  };
}