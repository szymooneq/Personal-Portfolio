export type ChildrenType = {
	children: React.ReactNode;
};

export type ProjectIconReference = {
	asset: {
		_ref: string;
		_type: string;
	};
};

export type ProjectLink = {
	link: {
		alt: string;
		icon: ProjectIconReference;
	};
	url: string;
};

export type ProjectTechnology = {
	icon: ProjectIconReference;
	title: string;
};

export type ProjectSlug = {
	slug: {
		current: string;
	};
};

export type Project = {
	title: string;
	theme: string[];
	type: {
		title: string;
	};
	technologies: ProjectTechnology[];
	links: ProjectLink[];
	thumbnail: ProjectIconReference;
} & ProjectSlug;

type ProjectStack = {
	description: string;
	title: string;
	url: string;
};

export type ProjectDetails = {
	description: string;
	details: string[];
	images: {
		alt: string;
	} & ProjectIconReference;
	links: ProjectLink[];
	stack: ProjectStack[];
	technologies: ProjectTechnology[];
	theme: string[];
	title: string;
	todo?: string[];
	type: {
		title: string;
	};
} & ProjectSlug;
