import styled, { css } from 'styled-components'
import type { StyledButtonProps } from './Button.types'
import { screen } from '@/lib/theme/breakpoints'

const Button = styled.button<StyledButtonProps>`
  cursor: pointer;

 ${props => props.variant === 'burger' && css`
    @media only screen and (${screen.mdDown}) {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      position: relative;
      aspect-ratio: 1 / 1;
      width: 2.5rem;
      border: none;
      background: transparent;

      & > span {
        display: block;
        width: 100%;
        height: 0.2rem;
        background: var(--gradient);
        transition: background 0.5s, transform 0.5s;
      }

      ${props.isExpanded && css`
        & > span {
          background: var(--black);

          &:nth-child(1) {
            transform: rotate(-45deg) translateY(0.5rem) translateX(-0.5rem);
          }

          &:nth-child(2) {
            transform: scaleX(0);
          }

          &:nth-child(3) {
            transform: rotate(45deg) translateY(-0.6rem) translateX(-0.6rem);
          }
        }
      `}
    }

    @media only screen and (${screen.md}) {
      display: none;
    }
 `}
`

export { Button }