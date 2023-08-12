import styled from 'styled-components'

const Title = styled.h1`
	margin-top: 2rem;
	font-size: var(--card-desc-font-size);
	font-weight: 400;
	color: var(--gray);
`

const Description = styled.p`
  margin: 1rem 0 2rem;
	font-size: var(--project-desc);
	letter-spacing: -1px;
	color: var(--black);
`

const Heading = styled.h2`
	margin: 2rem 0 1rem;
	font-size: var(--contact-title);
`

const Item = styled.li`
	margin-left: 2rem;

	&:not(:last-child) {
		margin-bottom: 0.3rem;
	}

	& > p {
		font-size: var(--card-title-font-size);
		letter-spacing: -1px;
		color: var(--gray);
	}
`

const SocialSection = styled.section`
  margin-bottom: 3rem;
	display: inline-flex;
	flex-wrap: wrap;
	gap: 1rem;
`

export { Title, Description, SocialSection, Heading, Item }