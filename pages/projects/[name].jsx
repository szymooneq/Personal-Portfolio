import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { leftArrow } from "../../assets/svgIconsPack";
import ContentLayout from "../../components/Layout/ContentLayout";
import Group from "../../components/UI/Group/Group";
import Slider from "../../components/UI/Slider/Slider";
import Technologies from "../../components/UI/Technologies/Technologies";
import { getAllProjectsId, getProjectData } from "../../lib/api/projects";
import { urlFor } from "../../lib/sanityConfig";
import styles from "../../styles/ProjectPage.module.css";

export default function ProjectPage({ projectData }) {
  return (
    <>
      <Head>
        <title>{`${projectData.title} | Projects | Szymon Dudka`}</title>
        <meta name="description" content={projectData.description} />
      </Head>

      <ContentLayout>
        <header>
          <h1 className={styles.title}>
            {projectData.title} - {projectData.type.title}
          </h1>
          <p className={styles.desc}>{projectData.description}</p>
        </header>

        <Group type="links">
          {projectData.links.map(({ link, url }) => (
            <a
              key={url}
              href={url}
              className="button"
              target="_blank"
              rel="noreferrer"
              aria-label={`${link.alt} of project`}>
              {link.alt}
              <Image
                src={urlFor(link.icon).url()}
                alt={link.alt}
                width={20}
                height={20}
              />
            </a>
          ))}
        </Group>

        <Slider images={projectData.images} />

        <Group title="Main technologies">
          <Technologies technologies={projectData.technologies} />
        </Group>

        {projectData.stack && (
          <Group type="list" title="Stack">
            {projectData.stack.map((el) => (
              <li key={el.title}>
                <a
                  href={el.url}
                  className={styles.stackUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Link to ${el.title} page`}>
                  {el.title}
                </a>{" "}
                - {el.description}
              </li>
            ))}
          </Group>
        )}

        <Group type="list" title="Details">
          {projectData.details.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </Group>

        {projectData.todo && (
          <Group type="list" title="To do">
            {projectData.todo.map((el) => (
              <li key={el}>{el}</li>
            ))}
          </Group>
        )}

        <Link
          href="/projects"
          scroll={false}
          className={`${styles.backButton} button`}>
          {leftArrow}Back to projects
        </Link>
      </ContentLayout>
    </>
  );
}

export async function getStaticPaths() {
  const paths = await getAllProjectsId();
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.name);

  return {
    props: {
      projectData
    }
  };
}
