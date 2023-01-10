export interface ProjectIconReference {
	asset: {
		_ref: string;
		_type: string;
	};
	alt?: string;
}

export type ProjectTechnology = {
	icon: ProjectIconReference;
	title: string;
};

export interface ProjectSlug {
	slug: {
		current: string;
	};
}

export interface ProjectDetails {
	type: {
		title: string;
	};
	thumbnail: ProjectIconReference;
	theme: string[];
	title: string;
	slug: {
		current: string;
	};
	images: ProjectIconReference[];
	description: string;
	technologies: ProjectTechnology[];
	stack: {
		description: string;
		title: string;
		url: string;
	}[];
	details: string[];
	links: {
		link: {
			alt: string;
			icon: ProjectIconReference;
		};
		url: string;
	}[];
	todo?: string[];
}
