import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Breadcrumb.module.css';

export default function Breadcrumb() {
  const router = useRouter()
  const breadcrumbs = router.asPath.replace(/\?.*/g,"$'").split('/')

  return (
    <nav className={styles.breadcrumb}>
      <div className="container">
        {breadcrumbs.map((fragment, id) => (
          <span key={id}>
            {id !== breadcrumbs.length - 1
              ? <>
                  <Link href={`/${fragment}`} className={styles.link}>{id === 0 ? "home" : fragment}</Link>
                  <span className={styles.active}> / </span>
                </>
              : <span className={styles.active}>{fragment.replace(/-/g, " ")}</span>}
          </span>
        ))}
      </div>
    </nav>
  );
}
