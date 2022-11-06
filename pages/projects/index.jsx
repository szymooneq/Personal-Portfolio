import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import CardList from '../../components/Card/CardList'
import TechnologyList from '../../components/Card/TechnologyList'
import Article from '../../components/Layout/Article'
import Text from '../../components/UI/Text/Text'
import { getAllProjects } from '../../lib/projects'
import styles from '../../styles/Projects.module.css'

export default function Projects({ projectList }) {
  const { push, query } = useRouter()
  const [projects, setProjects] = useState(projectList)
  
  const technologies = [...new Set(projectList.map((x) => x.technologies).flat().map((el) => JSON.stringify(el)))].map((el) => JSON.parse(el))

  useEffect(() => {
    if(query.category) {
      setProjects(projectList.filter((x) => x.technologies.find((y) => y.title.includes(query.category))))
    } else {
      setProjects(projectList)
    }
  }, [projectList, query.category])
  
  return (
    <Article header="Projects">
      <Text align="justify">Here you will find some of my projects that I have managed to create so far. I created each project myself, learning from various sources, such as documentation, YouTube videos, or paid courses, but I was primarily trying to understand the source code and work with it, not to copy ready-made materials from the Internet. You can easily filter projects by technology by clicking on the selected technology.</Text>

      <div className={styles.technologies}>
        <TechnologyList technologies={technologies} />
        {query.category && <button type="button" onClick={() => push('/projects')} className="reset">x reset filter</button>}
      </div>

      <CardList projects={projects} />
    </Article>
  )
}

export async function getStaticProps() {
  const projectList = await getAllProjects()

  return {
    props: {
      projectList
    }
  };
}