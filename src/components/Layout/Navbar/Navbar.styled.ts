import NextLink from 'next/link'
import styled, { css } from 'styled-components'
import { Logo } from '@/components/UI/Logo/Logo.styled'
import { screen } from '@/lib/theme/breakpoints'
import type { StyledMenuProps } from './Navbar.types'

const Navbar = styled.nav`
  padding-inline: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 5rem;
  border-bottom: 1px solid var(--bg-secondary);
  background-color: rgba(var(--bg-secondary), 0.7);
  backdrop-filter: blur(16px) saturate(1.5);
  z-index: 1;
`

const Wrapper = styled.div`

`

const Dropdown = styled.div`
  display: grid;
  position: absolute;
  top: 5rem;
  left: 0;
  right: 0;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.3s;
  z-index: 1;
  overflow: hidden;
`

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 3rem;
  position: relative;
  background-color: rgba(var(--bg-secondary), 0.7);
  backdrop-filter: blur(24px);
  overflow: hidden;
  z-index: 5;
`

const Links = styled.ul<StyledMenuProps>`
  margin-top: 4rem;
  display: flex;
  gap: 1rem;
  list-style-type: none;

  @media only screen and (${screen.lgDown}) {
    flex-direction: column;
  }

  @media only screen and (${screen.lg}) {
		flex-direction: row;
  }
`

const Link = styled(NextLink)`
  font-size: 1.25rem;
`


const FeaturedLink = styled(Link)`
  padding: 0.5rem 1rem;
	/* display: block; */
	width: max-content;
	border-radius: 2rem;
	background-color: ${({ isActive }) => isActive ? 'var(--primary-color)' : 'var(--bg-secondary)'};
	box-shadow: var(--shadow);
	transition: filter 0.3s;
  pointer-events: ${({ isActive }) => isActive ? 'none' : 'default'};

  [data-theme="dark"] & {
    color: #ffffff;
  }

  [data-theme="light"] & {
    color: ${({ isActive }) => isActive ? '#ffffff' : '#000000'};
  }

  @media only screen and (${screen.lg}) {
    display: block;
  }

  &:hover {
	  filter: drop-shadow(0 0 0.3rem rgba(var(--text-RGB), 0.44));
  }
`

const Desktop = styled.div`
  padding: 0.6rem 1.5rem;
	display: inline-flex;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	left: 0;
	right: 0;
	width: 100%;
	transform: translateY(0%);
	z-index: 1;

  @media only screen and (${screen.lg}) {
    ${Links} {
      display: flex;
      flex-direction: row;
    }

    ${FeaturedLink} {
      display: block;
    }
  }

  ${Links} {
    display: none;
  }

  ${props => props.isOtherPage && css`
    top: 0;
    border-bottom: 1px solid var(--bg-secondary);
    background-color: rgba(var(--bg-primary-RGB), 0.8);
    backdrop-filter: saturate(180%) blur(5px);
    animation: slideDown 0.4s ease-in-out forwards;
  `}
  
  ${props => props.isHomePage && css`
    bottom: 0;
    animation: slideUp 0.4s ease-in-out forwards;

    @media only screen and (${screen.md}) {
		  padding: 0.8rem 2rem;
    }

    ${Logo}::before {
      background: conic-gradient(
        rgba(255, 255, 255, 0.502),
        rgba(255, 255, 255, 0.251),
        rgba(255, 255, 255, 0.188),
        rgba(255, 255, 255, 0.125),
        rgba(255, 255, 255, 0.063),
        rgba(255, 255, 255, 0.063),
        rgba(255, 255, 255, 0.502)
      );
    }

    ${Links},
    ${MenuItem} {
	    color: #ffffff;
    }

    ${Logo}:hover,
    ${FeaturedLink}:hover,
    ${MenuItem}:hover {
      filter: drop-shadow(0 0 0.3rem rgba(255, 255, 255, 0.44));
    }
  `}
`

const MenuItem = styled.li`
  font-weight: ${({ isActive }) => isActive ? 700 : 400};
  color: ${({ isActive }) => isActive ? `var(--primary-color)` : `#ffffff`};
  pointer-events: ${({ isActive }) => isActive ? 'none' : 'default'};
	transition: filter 0.1s;

  &:hover {
	  filter: drop-shadow(0 0 0.3rem rgba(var(--text-RGB), 0.44));
  }
`

const ButtonWrapper = styled.div`
  display: none;

  @media only screen and (${screen.lg}) {
    display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
  }
`

const Burger = styled.button`
  display: flex;
	flex-direction: column;
	justify-content: space-around;
	position: relative;
	height: 2.5rem;
	width: 2.5rem;
	border: none;
	background: transparent;
	cursor: pointer;
	z-index: 60;

  @media only screen and (${screen.lg}) {
    display: none;
  }

  & > span {
    width: 100%;
    height: 0.2rem;
    border-radius: 1rem;
    background: var(--gradient);
    transition: background 0.5s, transform 0.5s;
  }

  ${props => props.isExpanded && css`
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
`

const MobileMenu = styled.div`
  display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: fixed;
	left: 0;
	top: 0;
	height: 100vh;
	width: calc(100vw - 30%);
	background-color: rgba(var(--bg-primary-RGB), 0.5);
	backdrop-filter: blur(15px);
	transform: ${({ isExpanded }) => isExpanded ? 'translateX(0)' : 'translateX(-100%)'};
	z-index: 100;
	transition: transform 0.3s;

  ${Logo} {
    position: absolute;
    top: 10px;
    left: 25px;
    cursor: default;
  }
`

const Settings = styled.div`
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  overflow: hidden;
`

const Mobile = styled.div`
  @media only screen and (${screen.lg}) {
    display: none;
  }

  ${FeaturedLink} {
    margin-top: 3rem;
  }
`

export { Navbar, Desktop, Dropdown, Menu, Links, Link, MenuItem, FeaturedLink, Mobile, MobileMenu, Settings, Burger, ButtonWrapper }