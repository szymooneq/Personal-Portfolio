import Head from 'next/head';
import { getAllProjectsId, getProjectData } from '../../lib/projects';

export default function ProjectPage({ projectData }) {

  return (
    <>
      <Head>
          <title>Title</title>
      </Head>
      <div>Test</div>
    </>
    
  )
}

export async function getStaticPaths() {
  const paths = await getAllProjectsId()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.name)
  console.log(projectData)

  return {
    props: {
      projectData
    }
  };
}
