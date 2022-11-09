import Link from 'next/link'
import { rightArrow } from '../../assets/svgIconsPack'
import Article from '../Layout/Article'
import CardList from '../UI/Card/CardList'
import Text from '../UI/Text/Text'
import styles from './Featured.module.css'

export default function Featured({ projects }) {
  return (
    <Article header="Featured Projects">
      <Text align="justify">Here you will find some of my featured projects that I have managed to create so far. Check them all on the projects page.</Text>
      
      <CardList projects={projects} />

      <div className={styles.center}>
        <Link href="projects" className="button">
          Check all projects{rightArrow}
        </Link>
      </div>
    </Article>
  )
}
