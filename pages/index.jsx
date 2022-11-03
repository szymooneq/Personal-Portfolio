import About from '../components/About/About';
import Featured from '../components/Featured/Featured';
import Hero from '../components/Hero/Hero';
import { getAllProjects } from '../lib/projects';
import styles from '../styles/Home.module.css';

export default function Home({ allProjects }) {
  return (
    <>
      <Hero />
      <About title="About Me" />
      <Featured title="Featured Projects" projects={allProjects} />
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