import styled from 'styled-components'
import { motion } from 'framer-motion'
import { screen } from '@/lib/theme/breakpoints'

const Description = styled.p`
  margin-bottom: 2rem;
	font-size: var(--card-title-font-size);
	letter-spacing: -1px;
	color: var(--gray);
`

const CardWrapper = styled(motion.section)`
  margin-top: 2rem;
  display: grid;
	grid-auto-rows: 1fr;
	gap: 1.5rem;

  @media only screen and (${screen.mdDown}) {
    grid-template-columns: 1fr;
  }

  @media only screen and (${screen.md}) and (${screen.lgDown}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (${screen.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export { Description, CardWrapper }