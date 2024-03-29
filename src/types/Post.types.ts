import { IImage, ISlug, ITechnology } from './Global.types'

interface BlockContent {
	_key: string
	_type: 'block' | 'code' | 'image'
	style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote'
	children: Span[]
	markDefs: []
	code?: string
	language?: string
	level?: number
	listItem?: 'bullet' | 'number'
}

interface Span {
	_key: string
	_type: 'span'
	marks: []
	text: string
}

interface IPostBase {
	mainImage: IImage
	title: string
	description: string
	technologies: ITechnology[]
}

export interface IPostCard extends IPostBase {
	slug: ISlug
}

export interface IPostDetails extends IPostBase {
	publishedAt: Date
	editedAt: Date
	body: BlockContent[]
}
