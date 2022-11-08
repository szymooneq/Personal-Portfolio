import About from '../components/About/About';
import Featured from '../components/Featured/Featured';
import Hero from '../components/Hero/Hero';
import { getAllProjects } from '../lib/projects';

export default function Home({ allProjects }) {
  return (
    <>
      <Hero />
      <About />
      <Featured projects={allProjects} />
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