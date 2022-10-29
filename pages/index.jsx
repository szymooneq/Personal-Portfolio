import Head from 'next/head'
import Image from 'next/image'
import { getAllProjects } from '../lib/projects'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      homepage
    </div>
  )
}

export async function getStaticProps() {
  const allProjects = await getAllProjects()
  // console.log(allProjects)

  return {
    props: {
      allProjects
    }
  };
}