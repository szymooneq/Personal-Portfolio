import NextImage from 'next/image'
import styled from 'styled-components'
import { screen } from '@/lib/theme/breakpoints'

const Section = styled.section`
	display: inline-flex;
	flex-wrap: wrap;
	gap: 1rem;
`

const Image = styled(NextImage)`
  filter: drop-shadow(0 0 0.3rem #00000070);
  aspect-ratio: 1 / 1;

  @media only screen and (${screen.mdDown}) {
    width: 2rem;
  }

  @media only screen and (${screen.md}) {
    width: 1.5rem;
  }
`

export { Section, Image }