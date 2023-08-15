import NextLink from 'next/link'
import styled from 'styled-components'
import aboutHeader from '@/assets/images/about-header.png'
import { aboutProjects } from '@/assets/images'
import { screen } from '@/lib/theme/breakpoints'

const Wrapper = styled.div`
  display: grid;
  gap: 1.5rem;

  @media only screen and (${screen.md}) and (${screen.lgDown}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (${screen.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const CardLink = styled(NextLink)<{ isFeatured?: boolean }>`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
	font-size: ${({ isFeatured }) => isFeatured ? 'var(--about-getTouch)' : '1.75rem'};
	font-weight: 700;
	letter-spacing: ${({ isFeatured }) => isFeatured ? '-2.5px' : '-0.8px'};
  color: ${({ isFeatured }) => isFeatured ? 'var(--primary-color)' : 'var(--white-color)'};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    cursor: pointer;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0;
    filter: blur(10px);
    background-color: var(--primary-color);
    z-index: -1;
    transition: opacity 0.5s;
  }

  & > svg {
    width: 40px;
    height: 40px;
    color: var(--gray);
  }
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

  &:hover {
    ${CardLink}::after {
      opacity: 0.7;
    }
  }

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

    & > svg {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 125px;
      height: auto;
      color: var(--primary-color);
      transform: translate(-50%, -50%);
    }
  }

  &:nth-child(7) {
    & > svg {
      margin-bottom: 0.5rem;
      width: 70px;
      height: 70px;
      color: var(--secondary-color);
    }
  }

  @media only screen and (${screen.md}) and (${screen.lgDown}) {
    &:nth-child(1) {
      grid-column: 1 / 4;
    }

    &:nth-child(3) {
      grid-column: 2 / 4;
    }

    &:nth-child(4) {
      grid-column: 1 / 3;
    }

    &:nth-child(6) {
      grid-column: 1 / 3;
    }
  }

  @media only screen and (${screen.lg}) {
    &:nth-child(1) {
      grid-column: 1 / 4;
    }

    &:nth-child(3) {
      grid-column: 1 / 3;
    }

    &:nth-child(4) {
      grid-column: 3 / 5;
    }

    &:nth-child(6) {
      grid-column: 2 / 4;
    }
  }
`

const CardTitle = styled.h2`
  font-size: var(--contact-title);
`

const CardSubtitle = styled.h3`
  margin-bottom: 0.5rem;
	font-size: 1.75rem;
	font-weight: 700;
	letter-spacing: -0.8px;
`

const CardHeading = styled.h3`
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

export { Wrapper, Card, CardLink, CardTitle, CardSubtitle, CardHeading, CardDescription }