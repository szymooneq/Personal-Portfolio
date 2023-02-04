import Article from '@/components/Layout/Article';
import { cubeIcon, layoutIcon, penIcon } from '@/components/UI/Svg/SvgIcons';
import { contactLinks } from '@/lib/helpers/contactLinks';
import styles from '@/styles/Contact.module.css';
import Head from 'next/head';

const cardAds = [
	{
		title: 'Website design & development',
		desc: 'Experienced designer & visual developer. I love creating websites/web applications.',
		icon: layoutIcon
	},
	{
		title: 'Visual & graphic design',
		desc: 'Eye for the visual side of things. I enjoy crafting with attention to detail!',
		icon: penIcon
	},
	{
		title: 'Branding',
		desc: 'Combining both my visual and analytical sides, I love creating brands.',
		icon: cubeIcon
	}
];

function Contact(): JSX.Element {
	return (
		<>
			<Head>
				<title>Contact | Szymon Dudka</title>
				<meta
					name="description"
					content="I’m always open to collaborate on a project or hear about an
          opportunity!"
				/>
			</Head>

			<Article header="Contact">
				<div className={styles.content}>
					<div className={styles.description}>
						<div>
							<h1 className={styles.title}>Get in Touch ✨</h1>
							<p className={styles.subText}>
								I’m always open to collaborating on a project or hearing about
								an opportunity!
							</p>
						</div>
						<div className={styles.contactTypes}>
							<div>
								<p className={styles.smallTitle}>want to call me?</p>
								<a
									href="https://discord.com/users/554988199529676800"
									target="_blank"
									rel="noreferrer"
									className={styles.info}>
									Schedule a call with me
								</a>
							</div>
							<div>
								<p className={styles.smallTitle}>Just want to email me?</p>
								<a href="mailto:szymooneq@zohomail.eu" className={styles.info}>
									szymooneq@zohomail.eu
								</a>
							</div>
						</div>
						<div className={styles.icons}>
							{contactLinks.map((link) => (
								<a
									key={link.name}
									href={link.url}
									target="_blank"
									rel="noreferrer"
									aria-label={link.ariaLabel}>
									{link.icon}
								</a>
							))}
						</div>
					</div>

					<form
						className={styles.form}
						action="https://usebasin.com/f/d46c0979603a"
						method="post">
						<div className={styles.field}>
							<label htmlFor="name" hidden>
								Enter your name
							</label>
							<input
								type="text"
								name="name"
								id="name"
								placeholder="Name"
								required
							/>
						</div>

						<div className={styles.field}>
							<label htmlFor="email" hidden>
								Enter your e-mail
							</label>
							<input
								type="email"
								name="email"
								id="email"
								placeholder="E-mail"
								required
							/>
						</div>

						<div className={styles.field}>
							<label htmlFor="message" hidden>
								Enter your message
							</label>
							<textarea
								id="message"
								name="message"
								rows={8}
								placeholder="Type your message"
								required
							/>
						</div>

						<button type="submit" className={styles.submit}>
							Send Message
						</button>
					</form>
				</div>
				<div className={styles.cards}>
					{cardAds.map((item) => (
						<div key={item.title} className={styles.card}>
							<div className={styles.cardIcon}>{item.icon}</div>
							<div className={styles.cardTitle}>{item.title}</div>
							<div className={styles.cardDesc}>{item.desc}</div>
						</div>
					))}
				</div>
			</Article>
		</>
	);
}

export default Contact;
