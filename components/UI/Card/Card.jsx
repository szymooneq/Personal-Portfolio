import Link from "next/link";
import { rightCircleArrow } from "../../../assets/svgIconsPack";
import { urlFor } from "../../../lib/sanityConfig";
import styles from "./Card.module.css";

export default function Card({ title, theme, thumbnail, type, slug }) {
  return (
    <div
      className={styles.card}
      style={{ "--theme-primary": theme[0], "--theme-secondary": theme[1] }}>
      <Link href={`/projects/${slug}`}>
        <div className={styles.content}>
          <img
            className={styles.img}
            src={urlFor(thumbnail).url()}
            alt={title}
          />
          <div className={styles.desc}>
            <div className={styles.type}>{type}</div>
            <div className={styles.name}>
              <h1>{title}</h1>
              {rightCircleArrow}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
