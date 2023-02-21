import { IImage, ISlug } from './global';

interface BlockContent {
	_key: string;
	_type: 'block' | 'code' | 'image';
	style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote';
	children: Span[];
	markDefs: [];
	code?: string;
	language?: string;
	level?: number;
	listItem?: 'bullet' | 'number';
}

interface Span {
	_key: string;
	_type: 'span';
	marks: [];
	text: string;
}

interface IPostBase {
	mainImage: IImage;
	title: string;
	description: string;
	technologies: ITechnology[];
}

interface IPostCard extends IPostBase {
	slug: ISlug;
}

interface IPostDetails extends IPostBase {
	publishedAt: Date;
	editedAt: Date;
	body: BlockContent[];
}
