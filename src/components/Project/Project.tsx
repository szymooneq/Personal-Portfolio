import { IProjectDetails } from '@/lib/interfaces/project';
import Head from 'next/head';
import Link from 'next/link';
import Container from '../Layout/Container/Container';
import Slider from '../UI/Slider/Slider';
import Technologies from '../UI/Technologies/Technologies';
import styles from './Project.module.css';
import BackButton from '../UI/BackButton/BackButton';
import { githubIcon, vercelIcon } from '../UI/Svg/SvgIcons';

const projectLinks = [
	{
		name: 'Vercel',
		link: 'View live site',
		icon: vercelIcon
	},
	{
		name: 'GitHub',
		link: 'View source code',
		icon: githubIcon
	}
];

interface ListProps {
	children: React.ReactNode;
	type?: string;
	title?: string;
}

function List({ type, title, children }: ListProps): JSX.Element {
	return type === 'list' ? (
		<div className={styles.list}>
			<h2>{title}</h2>
			<ul>{children}</ul>
		</div>
	) : (
		<div className={styles.list}>
			<h2>{title}</h2>
			{children}
		</div>
	);
}

interface ProjectProps {
	projectData: IProjectDetails;
}

function Project({ projectData }: ProjectProps): JSX.Element {
	return (
		<>
			<Head>
				<title>{`${projectData.title} | Projects | Szymon Dudka`}</title>
				<meta name="description" content={projectData.description} />
			</Head>

			<Container>
				<header>
					<h1 className={styles.title}>
						{projectData.title} - {projectData.type.title}
					</h1>
					<p className={styles.description}>{projectData.description}</p>
				</header>

				<div className={styles.links}>
					{projectLinks.map((link, id) => (
						<Link
							key={id}
							href={projectData.links[id].url}
							className={styles.link}
							target="_blank"
							rel="noreferrer">
							{link.link}
							{link.icon}
						</Link>
					))}
				</div>

				<Slider images={projectData.images} />

				<List title="Main technologies">
					<Technologies technologies={projectData.technologies} />
				</List>

				{projectData.stack.length > 0 && (
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
			</Container>
		</>
	);
}

export default Project;
