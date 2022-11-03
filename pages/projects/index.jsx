import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
import Title from '../../components/UI/Title/Title'
import { getAllProjects } from '../../lib/projects'
import { urlFor } from '../../sanity'
import styles from '../../styles/Projects.module.css'

export default function Projects({ allProjects, title }) {
  const { push, query } = useRouter()
  const [projects, setProjects] = useState(allProjects)
  
  const categories = [...new Set(allProjects
    .map((x) => x.technologies)
    .flat()
    .map((el) => JSON.stringify(el)))]
    .map((el) => JSON.parse(el))

  useEffect(() => {
    if(query.category) {
      setProjects(allProjects.filter((x) => x.technologies.find((y) => y.title.includes(query.category))))
    } else {
      setProjects(allProjects)
    }
  }, [allProjects, query.category])
  
  return (
    <article className={`container ${styles.section}`}>
      <Title title="Projects" />
      <div className={styles.content}>
        <p>Here you will find some of my projects that I have managed to create so far. I created each project myself, learning from various sources, such as documentation, YouTube videos, or paid courses, but I was primarily trying to understand the source code and work with it, not to copy ready-made materials from the Internet. You can easily filter projects by technology by clicking on the selected technology.</p>

        <div className={styles.categories}>
          {categories.map((el) => (
            <button key={el.title} onClick={() => push({ query: { category: el.title }})} className={`button ${query.category === el.title && "active"}`}>
              <Image src={urlFor(el.icon).url()} alt={el.title} width={20} height={20} />
              <span>{el.title.toUpperCase()}</span>
            </button>
          ))}
          {query.category && <button type="button" onClick={() => push('/projects')} className="reset">x reset filter</button>}
        </div>
      </div>

      <div className="grid-cards">
        {projects.map((project) => (
          <Card key={project.title} title={project.title} links={project.links} icon={urlFor(project.mainImage).url()} slug={project.slug.current} />
        ))}
      </div>
    </article>
  )
}

export async function getStaticProps() {
  const allProjects = await getAllProjects()

  return {
    props: {
      allProjects
    }
  };
}