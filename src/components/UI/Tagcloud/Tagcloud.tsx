import { useEffect, useState } from 'react';
const TagCloud = require('TagCloud');

const technologies: string[] = [
	'HTML5',
	'CSS3',
	'JavaScript',
	'TypeScript',
	'React',
	'Redux',
	'React Router',
	'React Query',
	'REST API',
	'Next.js',
	'SASS',
	'Tailwind CSS',
	'Bootstrap',
	'styled-components',
	'RWD',
	'MySQL',
	'Firebase',
	'Sanity',
	'Git',
	'GitHub',
	'Vercel',
	'npm',
	'Framer Motion',
	'Formik',
	'Yup',
	'VSCode',
	'Figma',
	'Adobe Photoshop'
];

export default function Tagcloud(): JSX.Element {
	const [radius, setRadius] = useState<number>(230);

	const handleResize = () => {
		if (window.innerWidth > 768) {
			setRadius(300);
		} else {
			setRadius(230);
		}
	};

	useEffect(() => {
		if (window.innerWidth > 768) {
			setRadius(300);
		}

		const instance = new TagCloud('.tagcloud', technologies, {
			radius: radius
		});
		window.addEventListener('resize', handleResize);

		return () => {
			instance.destroy();
			window.removeEventListener('resize', handleResize);
		};
	}, [radius]);

	return <div className="tagcloud"></div>;
}
