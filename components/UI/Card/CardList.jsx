import Card from "./Card"

export default function CardList({ projects }) {
  return (
    <div className="grid-cards">
      {projects.map((project, id) => (
        <Card key={project.title} id={id} title={project.title} links={project.links} thumbnail={project.thumbnail} slug={project.slug.current} />
      ))}
    </div>
  )
}
