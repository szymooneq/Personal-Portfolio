import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '../../sanity'
import styles from './Card.module.css'

export default function Card({ title, slug, icon, links }) {
  return (
    <div className={styles.card}>

      <Link className={styles.cardFront} href={`/projects/${slug}`}>
        <img className={styles.img} src={icon} alt={title} />
      </Link>

      <div className={styles.cardBehind}>
        <div className={styles.links}>
          {links.map(({ link, url }) => (
            <a key={link.title} href={url} rel="noreferrer" target="_blank">
              <Image src={urlFor(link.icon).url()} alt={link.alt} width={24} height={24} />
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
