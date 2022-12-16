import {
	discordIcon,
	githubIcon,
	linkedinIcon
} from '../../components/UI/Svg/SvgIcons';

type ContactLinks = {
	name: string;
	url: string;
	icon: JSX.Element;
	ariaLabel: string;
};

export const contactLinks: ContactLinks[] = [
	{
		name: 'LinkedIn',
		url: 'https://www.linkedin.com/in/szymon-dudka',
		icon: linkedinIcon,
		ariaLabel: 'Check my profile on LinkedIn'
	},
	{
		name: 'GitHub',
		url: 'https://github.com/szymooneq',
		icon: githubIcon,
		ariaLabel: 'Check my profile on GitHub'
	},
	{
		name: 'Discord',
		url: 'https://discord.com/users/554988199529676800',
		icon: discordIcon,
		ariaLabel: 'Contact me on Discord'
	}
];
