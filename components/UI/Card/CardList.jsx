import Card from "./Card"
import styles from "./Card.module.css"

export default function CardList({ projects }) {
  return (
    <div className={styles.gridCards}>
      {projects.map((project, id) => (
        <Card key={project.title} id={id} title={project.title} theme={project.theme} links={project.links} thumbnail={project.thumbnail} slug={project.slug.current} />
      ))}
    </div>
  )
}
