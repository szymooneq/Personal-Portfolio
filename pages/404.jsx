import Head from "next/head";
import Link from "next/link";
import { leftArrow } from "../assets/svgIconsPack";
import ContentLayout from "../components/Layout/ContentLayout";
import styles from "../styles/404.module.css";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 | Szymon Dudka</title>
        <meta
          name="description"
          content="The page you are looking for might have been removed had its name changed or is temporarily unavaible."
        />
      </Head>

      <ContentLayout className={styles.content}>
        <h1 className={styles.number}>404</h1>
        <p className={styles.description}>
          The page you are looking for might have been removed had its name
          changed or is temporarily unavaible.
        </p>

        <Link href="/" className="button">
          {leftArrow}
          <span>Back to homepage</span>
        </Link>
      </ContentLayout>
    </>
  );
}
