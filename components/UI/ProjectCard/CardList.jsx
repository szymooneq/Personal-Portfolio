import ProjectCard from "./ProjectCard";
import styles from "./ProjectCard.module.css";

export default function CardList({ projects }) {
  return (
    <div className={styles.gridCards}>
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          theme={project.theme}
          thumbnail={project.thumbnail}
          type={project.type.title}
          slug={project.slug.current}
        />
      ))}
    </div>
  );
}
