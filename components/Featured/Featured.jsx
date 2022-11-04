import Link from 'next/link'
import { rightArrow } from '../../assets/svgIconsPack'
import CardList from '../Card/CardList'
import Article from '../Layout/Article'
import styles from './Featured.module.css'

export default function Featured({ projects }) {
  return (
    <Article header="Featured Projects">
      <p className={styles.description}>Here you will find some of my projects that I have managed to create so far. I created each project myself, learning from various sources, such as documentation, YouTube videos, or paid courses, but I was primarily trying to understand the source code and work with it, not to copy ready-made materials from the Internet.</p>
      
      <CardList projects={projects} />

      <div className={styles.center}>
        <Link href="projects" className="button">
          Check all projects{rightArrow}
        </Link>
      </div>
    </Article>
  )
}
