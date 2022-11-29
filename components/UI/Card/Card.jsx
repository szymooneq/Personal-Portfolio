import { motion as m } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { rightCircleArrow } from '../../../assets/svgIconsPack'
import { urlFor } from '../../../lib/sanityConfig'
import styles from './Card.module.css'

export default function Card({ id, title, theme, slug, thumbnail, links }) {
  return (
    <m.div initial={{ opacity: 0, scale: .8 }} whileInView={{ opacity: 1, scale: 1, transition: { duration: .5 } }} viewport={{ once: true }} className={styles.card} style={{ "--theme-primary": theme[0], "--theme-secondary": theme[1] }}>
      <Link href={`/projects/${slug}`}>
        <div className={styles.content}>
          <div className={styles.cardImage}>
            <img className={styles.img} src={urlFor(thumbnail).url()} alt={title} />
          </div>

          <div className={styles.cardDescription}>
            <p className={styles.title}>{title}</p>
            {rightCircleArrow}
          </div>
        </div>
      </Link>
    </m.div>
  )
}
