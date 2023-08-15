import NextImage from 'next/image'
import styled from 'styled-components'
import { screen } from '@/lib/theme/breakpoints'

const Wrapper = styled.div`
  display: flex;
	gap: 4rem;
	position: relative;

  @media only screen and (${screen.lgDown}) {
    flex-direction: column;
  }

  @media only screen and (${screen.lg}) {
    flex-direction: row;
  }
`

const CardSection = styled.section`
  display: flex;
	gap: 1.5rem;

  @media only screen and (${screen.mdDown}) {
    flex-direction: column;
  }

  @media only screen and (${screen.md}) and (${screen.lgDown}) {
    flex-direction: row;
  }

  @media only screen and (${screen.lg}) {
    flex-direction: column;
    position: sticky;
		top: 100px;
		left: 0;
		height: fit-content;
  }
`

const Card = styled.div`
  padding: var(--padding);
	width: 100%;
	border-radius: var(--radius);
	background-color: var(--bg-secondary);
	box-shadow: var(--shadow);

  & > hr {
	  color: var(--gray);
  }

  @media only screen and (${screen.xxl}) {
    width: 400px;
  }
`

const Avatar = styled.div`
  margin-bottom: 1rem;
	display: flex;
	align-items: center;
	gap: 1rem;

  & > p {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
    border-radius: 1rem;
    color: #ffffff;
    background-color: var(--secondary-color);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s;
  }
`

const ImageWrapper = styled.div`
  position: relative;
	width: 90px;
	height: 90px;
	border-radius: 50%;
	cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background-color: rgba(var(--text-RGB), 70%);
    filter: blur(5px);
    opacity: 0;
    z-index: 1;
    transition: opacity 0.5s;
  }

  &:hover::after,
  &:focus-visible:after {
    opacity: 1;
  }

  &:hover ~ p,
  &:focus-visible ~ p {
    opacity: 1;
    visibility: visible;
  }
`

const Image = styled(NextImage)`
  position: relative;
	width: 100%;
	height: auto;
	border-radius: inherit;
	z-index: 2;
`

const Title = styled.h2`
  margin-bottom: 1rem;
	font-size: 1.75rem;
	font-weight: 700;
	letter-spacing: -0.8px;
`

const Subtitle = styled.h3`
  font-size: var(--card-title-font-size);
	color: var(--secondary-color);
	letter-spacing: -1px;
`

const Refrences = styled.div`
  margin-top: 1rem;

  & > p {
    font-size: var(--card-desc-font-size);
    font-weight: 400;
    letter-spacing: -0.8px;
    color: var(--gray);
  }
`

const ContactSection = styled.div`
  margin-top: 1.5rem;
	display: inline-flex;
	flex-wrap: wrap;
	gap: 1rem;
`

const Section = styled.section`
	margin-bottom: 3rem;

  & > ul {
    list-style-type: none;
  }

  & > div {
	  margin-bottom: 3rem;
  }
`

const Heading = styled.h3`
  margin-bottom: 0.5rem;
	font-size: var(--card-title-font-size);
	letter-spacing: -1px;
	color: var(--primary-color);
`

const Timeline = styled.span`
  font-size: 1rem;
	letter-spacing: -0.8px;
	color: var(--black);
`

const Description = styled.p`
  margin-top: 1rem;
	font-size: var(--card-title-font-size);
	letter-spacing: -1px;
	color: var(--gray);
`

export { Wrapper, CardSection, Card, Avatar, ImageWrapper, Image, Title, Subtitle, Refrences, ContactSection, Section, Heading, Timeline, Description }