import { screen } from '@/lib/theme/breakpoints'
import styled from 'styled-components'

const FormSection = styled.section`
  margin-top: 3rem;
	display: flex;
	justify-content: center;
	gap: 2rem;

  @media only screen and (${screen.lgDown}) {
    flex-direction: column;
  }

  @media only screen and (${screen.lg}) {
    flex-direction: row;
  }
`

const Contact = styled.div`
  display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 2rem;
`

const Title = styled.h2`
  margin-bottom: 1rem;
	font-size: var(--contact-title);
`

// TODO: theme
const Description = styled.p`
  font-size: var(--card-title-font-size);
	letter-spacing: -1px;
	color: #808080;
`

const Questions = styled.ul`
  list-style-type: none;

  & > li:first-child {
    margin-bottom: 2rem;
  }
`

const Question = styled.p`
  margin-bottom: 0.2rem;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: -0.3px;
  font-weight: 600;
  color: var(--gray);
`

const SocialList = styled.ul`
  display: inline-flex;
	gap: 2rem;
  list-style-type: none;
`

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
  flex-basis: 100%;
	border-radius: var(--radius);
	background: var(--bg-secondary);
	box-shadow: var(--shadow);

  @media only screen and (${screen.lgDown}) {
    padding: 1rem;
  }

  @media only screen and (${screen.lg}) {
		padding: 2rem;
  }
`

const Input = styled.input`
  padding: 1rem;
	width: 100%;
	font-size: 1rem;
  font-family: 'DM Sans';
	border: none;
	border-radius: 0.5rem;
	color: var(--black);
	background: rgb(var(--bg-primary-RGB));
	box-shadow: var(--shadow);

  &:focus {
    border-image-source: var(--gradient);
    border-image-slice: 1;
    outline: none;
  }
`

const Textarea = styled(Input)`
	resize: vertical;
`

const Cards = styled.section`
  margin-top: 5rem;
	display: grid;
	gap: 1.5rem;

  @media only screen and (${screen.lgDown}) {
	  grid-template-columns: 1fr;
  }

  @media only screen and (${screen.lg}) and (${screen.xlDown}) {
		grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (${screen.xl}) {
		grid-template-columns: repeat(3, 1fr);
  }
`

const Card = styled.div`
  padding: var(--padding);
	border-radius: var(--radius);
	background-color: var(--bg-secondary);
	box-shadow: var(--shadow);

  & > svg {
    margin: 0.5rem;
    width: 5rem;
    height: 5rem;
    color: var(--primary-color);
  }

  @media only screen and (${screen.lg}) and (${screen.lgDown}) {
		&:nth-child(3) {
		  grid-column: 1 / 3;
    }
  }

  @media only screen and (${screen.xl}) {
    &:nth-child(3) {
		  grid-column: auto;
    }
  }
`

const CardTitle = styled.h3`
  margin-bottom: 1rem;
	font-size: var(--card-title-font-size);
	font-weight: 700;
	letter-spacing: -1px;
`

const CardDesc = styled.p`
  font-size: var(--card-desc-font-size);
	color: var(--gray);
	letter-spacing: -0.8px;
`

export { FormSection, Contact, Title, Description, Questions, Question, SocialList, Form, Input, Textarea, Cards, Card, CardTitle, CardDesc }