import Card from "./Card";

export default function CardList({ projects }) {
  return (
    <div className="grid-cards">
      {projects.map((project) => (
        <Card key={project.title} title={project.title} links={project.links} image={project.mainImage} slug={project.slug.current} />
      ))}
    </div>
  )
}
