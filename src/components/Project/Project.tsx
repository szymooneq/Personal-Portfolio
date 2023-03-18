import { IProjectDetails } from '@/lib/interfaces/project';
import urlFor from '@/lib/sanity/client/urlFor';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Article from '../Layout/Article/Article';
import List from '../UI/List/List';
import Slider from '../UI/Slider/Slider';
import Technologies from '../UI/Technologies/Technologies';
import styles from './Project.module.css';
import BackButton from '../UI/BackButton/BackButton';

interface props {
	projectData: IProjectDetails;
}

function Project({ projectData }: props): JSX.Element {
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

				<List type="links">
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
				</List>

				<Slider images={projectData.images} />

				<List title="Main technologies">
					<Technologies technologies={projectData.technologies} />
				</List>

				{projectData.stack && (
					<List type="list" title="Stack">
						{projectData.stack.map((item) => (
							<li key={item.title}>
								<Link
									href={item.url}
									className={styles.stackUrl}
									target="_blank"
									rel="noreferrer"
									aria-label={`Link to ${item.title} page`}>
									{item.title}
								</Link>{' '}
								- {item.description}
							</li>
						))}
					</List>
				)}

				<List type="list" title="Details">
					{projectData.details.map((detail) => (
						<li key={detail}>{detail}</li>
					))}
				</List>

				<BackButton href="/projects" />
			</Article>
		</>
	);
}

export default Project;
