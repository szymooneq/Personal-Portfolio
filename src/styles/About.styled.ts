import NextLink from 'next/link'
import styled from 'styled-components'
import aboutHeader from '@/assets/images/about-header.png'
import { aboutProjects } from '@/assets/images'

const Wrapper = styled.div`
  display: grid;
  gap: 1.5rem;
`

const Card = styled.div`
  padding: var(--padding);
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	position: relative;
	min-height: 305px;
	border-radius: var(--radius);
	background-color: var(--bg-secondary);
	box-shadow: var(--shadow);

  &:nth-child(1) {
    background-image: url(${aboutHeader.src});
    background-size: cover;
    background-position: top;
  }

  &:nth-child(4) {
    background-image: url(${aboutProjects.src});
    background-size: 639px auto;
    background-repeat: no-repeat;
  }

  &:nth-child(5) {
    align-items: flex-end;
    position: relative;

    & > svg {
      align-self: center;
      width: 125px;
      height: auto;
      color: var(--primary-color);
    }
  }

  &:nth-child(6) > h2 {
    font-size: var(--about-getTouch);
    font-weight: 700;
    letter-spacing: -4px;
    color: var(--primary-color);
  }

  &:nth-child(7) > svg {
    margin-bottom: 0.5rem;
    width: 70px;
    height: 70px;
    color: var(--secondary-color);
  }

  &:nth-child(7) .title {
    margin-bottom: 0;
  }
`

const CardLink = styled(Card.withComponent(NextLink))`
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: var(--radius);
    filter: blur(10px);
    background-color: var(--primary-color);
    opacity: 0;
    transition: opacity 0.5s;
    z-index: -1;
  }

  &:hover::before {
    opacity: 0.7;
  }
`

const CardHeading = styled.span`
  margin-bottom: 0.5rem;
	font-size: 1.75rem;
	font-weight: 700;
	letter-spacing: -0.8px;
`

const CardSubtitle = styled.span`
  margin-bottom: 0.5rem;
	font-size: 0.875rem;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: -0.3px;
	color: var(--gray);
`

const CardDescription = styled.p`
  font-size: var(--card-desc-font-size);
	letter-spacing: -0.8px;
	color: var(--gray);
`

const CardTitle = styled.h2`
  font-size: var(--contact-title);
`

const GetTouch = styled.span`
  font-size: var(--about-getTouch);
  font-weight: 700;
  letter-spacing: -4px;
  color: var(--primary-color);
`

const FlexEnd = styled.span`
  display: flex;
	justify-content: space-between;
	align-items: flex-end;

  & > svg {
    width: 40px;
    height: 40px;
    color: var(--gray);
  }
`

export { Wrapper, Card, CardLink, CardTitle, CardHeading, CardSubtitle, CardDescription, GetTouch, FlexEnd }