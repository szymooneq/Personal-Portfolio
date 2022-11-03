import Link from 'next/link'
import { rightArrow } from '../../assets/svgIconsPack'
import { urlFor } from '../../sanity'
import Card from '../Card/Card'
import Title from '../UI/Title/Title'
import styles from './Featured.module.css'

export default function Featured({ projects, title }) {
  return (
    <article className={`container ${styles.section}`}>
      <Title title={title} />
      <section className={styles.content}>
        
        <p className={styles.description}>Here you will find some of my projects that I have managed to create so far. I created each project myself, learning from various sources, such as documentation, YouTube videos, or paid courses, but I was primarily trying to understand the source code and work with it, not to copy ready-made materials from the Internet.</p>
        
        <div className="grid-cards">
          {projects.map((project) => (
            <Card key={project.title} title={project.title} links={project.links} icon={urlFor(project.mainImage).url()} slug={project.slug.current} />
          ))}
        </div>

        <div className={styles.button}>
          <Link href="projects" className="button">
            <span>Check all projects</span>
            {rightArrow}
          </Link>
        </div>
      </section>
    </article>
  )
}
