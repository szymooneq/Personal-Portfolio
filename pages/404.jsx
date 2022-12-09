import Head from "next/head";
import Link from "next/link";
import { leftArrow } from "../assets/svgIconsPack";
import Article from "../components/Layout/Article";
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

      <Article style={styles.content}>
        <h1 className={styles.number}>404</h1>
        <p className={styles.description}>
          The page you are looking for might have been removed had its name
          changed or is temporarily unavaible.
        </p>

        <Link href="/" className="button">
          {leftArrow}
          <span>Back to homepage</span>
        </Link>
      </Article>
    </>
  );
}
