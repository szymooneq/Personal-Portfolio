import Link from 'next/link'
import { leftArrow } from '../../assets/svgIconsPack'
import TechnologyList from '../../components/Card/TechnologyList'
import Article from '../../components/Layout/Article'
import Template from '../../components/Template/Template'
import { getAllProjectsId, getProjectData } from '../../lib/projects'
import { urlFor } from '../../lib/sanityConfig'
import styles from '../../styles/ProjectPage.module.css'

export default function ProjectPage({ projectData }) {
  return (
    <Article style={styles.section}>
      <header className={styles.header}>
        <h1 className={styles.title}>{projectData.title}</h1>
        <p className={styles.description}>{projectData.description}</p>
      </header>

      <Template className={styles.technologies} title="Main technologies:">
        <div className={styles.flex}>
          <TechnologyList technologies={projectData.technologies} />
        </div>
      </Template>

      {projectData.stack && (
        <Template type="list" className={styles.learning} title="Stack:">
          {projectData.stack?.map((el) => <li key={el.title}><a href={el.url} className={styles.url} target="_blank" rel="noreferrer">{el.title}</a> - {el.description}</li>)}
        </Template>
      )}

      <Template type="list" className={styles.learning} title="Details:">
        {projectData.details.map((el) => <li key={el}>{el}</li>)}
      </Template>

      {projectData.todo && (
        <Template type="list" className={styles.learning} title="To do:">
          {projectData.todo?.map((el) => <li key={el}>{el}</li>)}
        </Template>
      )}

      <div className={styles.category}>
        {projectData.links.map(({ link, url }) => (
          <a key={link.title} href={url} className="button" target="_blank" rel="noreferrer">
            <span>{link.alt}</span>
            <img src={urlFor(link.icon).url()} alt={link.alt} />
          </a>
        ))}
      </div>

      {/* <Slider slides={[preview, preview, preview, preview, preview, preview, preview]} /> */}

      <div className={styles.category}>
        {projectData.links && <iframe className={styles.iframe} src={projectData.links[0].url} title={projectData.name} />}
      </div>

      <div className={styles.category}>
        <Link href="/projects" className="button">
          {leftArrow}
          <span>Back to projects</span>
        </Link>
      </div>
        
    </Article>
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
  // console.log(projectData)

  return {
    props: {
      projectData
    }
  }
}
