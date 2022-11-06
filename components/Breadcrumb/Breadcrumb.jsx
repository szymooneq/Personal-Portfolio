import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Breadcrumb.module.css'

export default function Breadcrumb() {
  const { asPath } = useRouter()
  const breadcrumbs = asPath.replace(/\?.*/g,"$'").split('/')

  return (
    <nav className={styles.breadcrumb}>
      <div className="container">
        {breadcrumbs.map((path, id) => (
          <span key={id}>
            {id !== breadcrumbs.length - 1
              ? <>
                  <Link href={`/${path}`} className={styles.link}>{id === 0 ? "home" : path}</Link>
                  <span className={styles.active}> / </span>
                </>
              : <span className={styles.active}>{path.replace(/-/g, " ")}</span>}
          </span>
        ))}
      </div>
    </nav>
  );
}
