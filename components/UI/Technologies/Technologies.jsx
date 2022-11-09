import Image from "next/image"
import { useRouter } from "next/router"
import { urlFor } from "../../../lib/sanityConfig"
import styles from './Technologies.module.css'

export default function Technologies({ technologies }) {
  const { query, push } = useRouter()

  return (
    <div className={styles.technologies}>
      {technologies.map((el) => (
        <button key={el.title} onClick={() => push({ pathname: '/projects', query: { category: el.title }})} className={`button ${query.category === el.title && "active"}`}>
          <Image src={urlFor(el.icon).url()} alt={el.title} width={20} height={20} />
          {el.title.toUpperCase()}
        </button>
      ))}
      {query.category && <button type="button" onClick={() => push('/projects')} className="reset">x reset filter</button>}
    </div>
  )
}
