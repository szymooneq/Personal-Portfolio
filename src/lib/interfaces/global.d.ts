export interface Base<T> {
	_id: string;
	_rev: string;
	_type: T;
	_createdAt: Date;
	_updatedAt: Date;
}

interface Reference {
	_ref: string;
	_type: 'reference';
}

export interface IImage {
	_key?: string;
	alt?: string;
	_type: 'image';
	asset: Reference;
}

interface ISlug {
	type: 'slug';
	current: string;
}

export interface ITechnology extends Base<'technologies'> {
	title: string;
	icon: IImage;
}
