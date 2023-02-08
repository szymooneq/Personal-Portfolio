import Article from '@/components/Layout/Article';
import Group from '@/components/UI/List/List';
import Slider from '@/components/UI/Slider/Slider';
import Technologies from '@/components/UI/Technologies/Technologies';
import { ProjectDetails } from '@/interfaces/project';
import { getAllProjectsId, getProjectData } from '@/lib/api/projects';
import urlFor from '@/lib/sanity/client/urlFor';
import styles from '@/styles/ProjectPage.module.css';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';

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

			<Article>
				<header>
					<h1 className={styles.title}>
						{projectData.title} - {projectData.type.title}
					</h1>
					<p className={styles.description}>{projectData.description}</p>
				</header>

				<Group type="links">
					{projectData.links.map(({ link, url }) => (
						<Link
							key={url}
							href={url}
							className={styles.link}
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
						</Link>
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
								<Link
									href={el.url}
									className={styles.stackUrl}
									target="_blank"
									rel="noreferrer"
									aria-label={`Link to ${el.title} page`}>
									{el.title}
								</Link>{' '}
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

				<Link href="/projects" scroll={false} className={styles.backButton}>
					Go back
				</Link>
			</Article>
		</>
	);
}

export default ProjectPage;

interface IParams extends ParsedUrlQuery {
	slug: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = await getAllProjectsId();
	return {
		paths,
		fallback: false
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { slug } = params as IParams;
	const projectData = await getProjectData(slug);

	return {
		props: {
			projectData
		},
		revalidate: 60
	};
};
