import { getAllProjects } from '../../lib/projects';

export default function Projects({ allProjects }) {
  return (
    <div>Projects</div>
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