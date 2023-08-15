import NextLink from 'next/link'
import styled from 'styled-components'
import { screen } from '@/lib/theme/breakpoints'
import { slideUpHeading } from '@/lib/theme/keyframes'
import { Button } from '@/components/UI/Button/Button.styled'

const Container = styled.div`
  margin-inline: auto;
  padding-inline: 1.5rem;
  width: 100%;

  @media only screen and (${screen.sm}) and (${screen.mdDown}) {
    max-width: 640px;
  }

  @media only screen and (${screen.md}) and (${screen.lgDown}) {
    max-width: 768px;
  }

  @media only screen and (${screen.lg}) and (${screen.xlDown}) {
    max-width: 1024px;
  }

  @media only screen and (${screen.xl}) {
    max-width: 1350px;
  }
`

const SrOnly = styled.span`
  margin: -1px;
  padding: 0;
  position: absolute;
  width: 1px;
  height: 1px;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
  overflow: hidden;
`

const Heading = styled.h1`
	margin: 2rem 0;
	font-size: clamp(0px, 20vw, 320px);
	font-weight: 700;
  text-align: center;
	white-space: nowrap;
	color: var(--text-header);
	opacity: 0;
	visibility: hidden;
	transform: translateY(100px);
	animation: ${slideUpHeading} 1s 0.3s forwards;
`

const Link = Button.withComponent(NextLink)

export { Container, SrOnly, Link, Heading }