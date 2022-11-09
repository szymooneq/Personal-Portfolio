import { motion as m } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '../../../lib/sanityConfig'
import styles from './Card.module.css'

export default function Card({ id, title, slug, thumbnail, links }) {
  return (
    <m.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { type: "spring", duration: 1, delay: id * 0.1} }} className={styles.card}>
      <Link className={styles.cardFront} href={`/projects/${slug}`}>
        <img className={styles.img} src={urlFor(thumbnail).url()} alt={title} />
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
    </m.div>
  )
}
