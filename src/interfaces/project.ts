import { Base, IImage, ISlug, ITechnology } from './global';

interface IProjectType extends Base<'types'> {
	title: string;
}

interface IProjectLinks {
	_key: string;
	_type: 'link';
	url: string;
}

interface IProjectStack extends Base<'stacks'> {
	title: string;
	description: string;
	url: string;
}

interface IProjectBase {
	title: string;
	description: string;
	type: IProjectType;
	technologies: ITechnology[];
}

export interface IProjectDetails extends IProjectBase {
	links: IProjectLinks[];
	images: IImage[];
	stack: IProjectStack[];
	details: string[];
}

export interface IProjectCard extends IProjectBase {
	slug: ISlug;
	theme: string[];
	thumbnail: IImage;
}
