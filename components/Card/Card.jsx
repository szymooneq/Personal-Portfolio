import Link from 'next/link'
import { urlFor } from '../../sanity'
import styles from './Card.module.css'

export default function Card({ slug, icon, title, links }) {
  return (
    <div className={styles.card}>
      <Link className={styles.cardFront} href={`/projects/${slug}`}>
        <img className={styles.img} src={icon} alt={title} />
      </Link>

      <div className={styles.cardBehind}>
        <div className={styles.links}>
          {links.map(({ link, url }) => (
            <a key={link.title} href={url} rel="noreferrer" target="_blank">
              <img src={urlFor(link.icon).url()} alt={link.alt} />
            </a>
          ))}
        </div>
        
        <Link className={styles.name} href={`/projects/${slug}`}>
          <p>{title}</p>
        </Link>
      </div>
    </div>
  )
}
