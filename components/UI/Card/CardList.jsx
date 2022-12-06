import Card from "./Card";
import styles from "./Card.module.css";

export default function CardList({ projects }) {
  return (
    <div className={styles.gridCards}>
      {projects.map((project) => (
        <Card
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
