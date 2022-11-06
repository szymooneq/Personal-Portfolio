import Card from "./Card"
import styles from "./Card.module.css"

export default function CardList({ projects }) {
  return (
    <div className="grid-cards">
      {projects.map((project, id) => (
        <Card key={project.title} id={id} title={project.title} links={project.links} image={project.mainImage} slug={project.slug.current} />
      ))}
    </div>
  )
}
