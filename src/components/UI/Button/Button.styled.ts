import styled, { css } from 'styled-components'
import type { StyledButtonProps } from './Button.types'
import { screen } from '@/lib/theme/breakpoints'

// TODO: theme colors & switch
const Button = styled.button<StyledButtonProps>`
  position: relative;
  cursor: pointer;

  ${props => {
    switch (props.variant) {
      case 'burger': {
        return css`
          @media only screen and (${screen.mdDown}) {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
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
                background: #ffffff;

                &:nth-child(2) {
                  transform: rotate(-45deg) translateY(0.5rem) translateX(-0.5rem);
                }

                &:nth-child(3) {
                  transform: scaleX(0);
                }

                &:nth-child(4) {
                  transform: rotate(45deg) translateY(-0.6rem) translateX(-0.6rem);
                }
              }
            `}
          }

          @media only screen and (${screen.md}) {
            display: none;
          }
        `
      }

      case 'back': {
        return css`
          margin: 4rem auto;
          padding: 2rem 5rem;
          display: block;
          width: fit-content;
          font-size: var(--project-desc);
          letter-spacing: -1px;
          border-radius: var(--radius);
          background-color: var(--bg-secondary);
          box-shadow: var(--shadow);

          &:hover,
          &:focus-visible {
            color: var(--primary-color);

            &::after {
              opacity: 0.7;
            }
          }

          &::after {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: var(--radius);
            background-color: var(--primary-color);
            filter: blur(10px);
            opacity: 0;
            z-index: -1;
            transition: opacity 0.5s;
          }
        `
      }

      case 'projectLink': {
        return css`
          padding: 0.5rem 1rem;
          display: inline-flex;
          gap: 0.4rem;
          font-size: 1rem;
          font-weight: 600;
          background: var(--bg-secondary);
          opacity: 1;
          transition: opacity 0.3s;

          &:hover {
            opacity: 0.7;
          }

          & > svg {
            width: 1.25rem;
            height: 1.25rem;
            color: var(--black);
          }
        `
      }

      case 'technology': {
        return css`
          padding: 0.5rem 1rem;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          text-transform: uppercase;
          font-size: 1rem;
          font-weight: 500;
          border: none;
          color: ${props.isReset ? '#fe315c' : 'var(--black)'};
          background: ${props.isActive ? 'var(--gradient)' : 'var(--bg-secondary)'};
          opacity: 1;
          pointer-events: ${props.isActive ? 'none' : 'auto'};
          transition: opacity 0.3s;

          &:hover {
            opacity: 0.7;
          }

          @media only screen and (${screen.mdDown}) {
            & > span {
              margin: -1px;
              padding: 0;
              position: absolute;
              width: 1px;
              height: 1px;
              clip: rect(0, 0, 0, 0);
              white-space: nowrap;
              border-width: 0;
              overflow: hidden;
            }
          }

          @media only screen and (${screen.md}) {
            & > span {
              display: block;
              filter: drop-shadow(0 0 0.3rem #00000070);
            }
          }
        `
      }

      default: {
        return css`
          font-weight: 700;
          color: var(--primary-color);

          &:hover {
            color: var(--black);
          }
        `
      }
    }
  }}
`

export { Button }