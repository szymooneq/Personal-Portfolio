import Link from 'next/link';
// import useBreadcrumbs from 'use-react-router-breadcrumbs';
import styles from './Breadcrumb.module.css';

export default function Breadcrumb() {
  // const breadcrumbs = useBreadcrumbs();

  return (
    <nav className={styles.breadcrumb}>
      <div className="container">
        {/* {breadcrumbs.map(({ match, breadcrumb }, id) => (
          <span key={match.pathname}>
            {id !== breadcrumbs.length - 1
              ? <><Link to={match.pathname} className={styles.link}>{breadcrumb}</Link><span className={styles.active}> / </span></>
              : <span className={styles.active}>{breadcrumb}</span>}
          </span>
        ))} */}
        <span className={styles.active}>Breadcrumb</span>
      </div>
    </nav>
  );
}
