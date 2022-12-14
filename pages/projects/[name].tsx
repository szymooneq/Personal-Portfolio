import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';
import ContentLayout from '../../src/components/Layout/ContentLayout';
import Group from '../../src/components/UI/Group/Group';
import Slider from '../../src/components/UI/Slider/Slider';
import Technologies from '../../src/components/UI/Technologies/Technologies';
import { ProjectDetails } from '../../src/interfaces/project';
import { getAllProjectsId, getProjectData } from '../../src/lib/api/projects';
import { urlFor } from '../../src/lib/sanityConfig';
import styles from '../../src/styles/ProjectPage.module.css';

interface props {
	projectData: ProjectDetails;
}

function ProjectPage({ projectData }: props): JSX.Element {
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
								</a>{' '}
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

				{/* {projectData.todo && (
          <Group type="list" title="To do">
            {projectData.todo.map((el) => (
              <li key={el}>{el}</li>
            ))}
          </Group>
        )} */}

				<Link href="/projects" scroll={false} className={styles.backButton}>
					Go back
				</Link>
			</ContentLayout>
		</>
	);
}

export default ProjectPage;

interface IParams extends ParsedUrlQuery {
	name: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = await getAllProjectsId();
	return {
		paths,
		fallback: false
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { name } = params as IParams;
	const projectData = await getProjectData(name);
	// console.log(projectData);

	return {
		props: {
			projectData
		}
	};
};
