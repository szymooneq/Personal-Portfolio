import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Article from "../../components/Layout/Article";
import CardList from "../../components/UI/Card/CardList";
import Technologies from "../../components/UI/Technologies/Technologies";
import Text from "../../components/UI/Text/Text";
import { getAllProjects } from "../../lib/projects";

export default function Projects({ projectList, technologies }) {
  const { query } = useRouter();
  const [filteredProjects, setFilteredProjects] = useState(projectList);

  useEffect(() => {
    if (query.category) {
      setFilteredProjects(
        projectList.filter((x) =>
          x.technologies.find((y) => y.title.includes(query.category))
        )
      );
    } else {
      setFilteredProjects(projectList);
    }
  }, [projectList, query.category]);

  return (
    <>
      <Head>
        <title>Projects | Szymon Dudka</title>
        <meta
          name="description"
          content="Here you will find some of my projects that I have managed to create so far."
        />
      </Head>

      <Article header="Projects">
        <Text align="justify">
          Here you will find some of my projects that I have managed to create
          so far. I created each project myself, learning from various sources,
          such as documentation, YouTube videos, or paid courses, but I was
          primarily trying to understand the source code and work with it, not
          to copy ready-made materials from the Internet. You can easily filter
          projects by technology by clicking on the selected technology.
        </Text>

        <Technologies technologies={technologies} />

        <CardList projects={filteredProjects} />
      </Article>
    </>
  );
}

export async function getStaticProps() {
  const projectList = await getAllProjects();
  const technologies = [
    ...new Set(
      projectList
        .map((x) => x.technologies)
        .flat()
        .map((el) => JSON.stringify(el))
    )
  ].map((el) => JSON.parse(el));

  return {
    props: {
      projectList,
      technologies
    }
  };
}
