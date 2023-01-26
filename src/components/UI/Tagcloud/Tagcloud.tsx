import { useEffect, useState } from 'react';
const TagCloud = require('TagCloud');

const technologies = [
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
	'styled-components',
	'Tailwind CSS',
	'Bootstrap',
	'Jest',
	'Node.js',
	'Sanity',
	'Strapi',
	'Firebase',
	'MySQL',
	'Git',
	'GitHub',
	'Vite',
	'Vercel',
	'Netlify',
	'npm',
	'yarn',
	'Figma',
	'Adobe Photoshop',
	'VSCode',
	'Prettier'
];

function Tagcloud(): JSX.Element {
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

export default Tagcloud;
