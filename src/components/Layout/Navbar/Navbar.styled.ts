import Link from 'next/link'
import styled, { css } from 'styled-components'
import { screen } from '@/lib/themes'
import { Logo } from '@/components/UI/Logo/Logo.styled'

const Menu = styled.ul`
  display: flex;
	flex-direction: column;
	align-items: center;
	gap: 3rem;
	font-size: 1.25rem;
	line-height: 1.5rem;
	list-style-type: none;

  @media only screen and (${screen.lg}) {
    display: flex;
		flex-direction: row;
  }
`

const Navbar = styled.nav`
  position: relative;
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

  ${Menu} {
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

    ${Menu},
    ${MenuItem} {
	    color: #ffffff;
    }

    ${Logo}:hover,
    ${ContactLink}:hover,
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

const ContactLink = styled(Link)`
  padding: 0.5rem 1rem;
	display: block;
	width: max-content;
	border-radius: 2rem;
  color: ${({ isActive }) => isActive ? '#ffffff' : '#ffffff'};
	background-color: ${({ isActive }) => isActive ? 'var(--primary-color)' : 'var(--bg-secondary)'};
	box-shadow: var(--shadow);
	transition: filter 0.3s;
  pointer-events: ${({ isActive }) => isActive ? 'none' : 'default'};

  @media only screen and (${screen.lg}) {
    display: block;
  }

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

const BlackLayer = styled.div`
  position: fixed;
	inset: 0;
	width: 100vw;
	height: 100vh;
	background: transparent;
	visibility: ${({ isActive }) => isActive ? 'visible' : 'hidden'};
	pointer-events: ${({ isActive }) => isActive ? 'all' : 'none'};
	z-index: 60;
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

const Settings = styled.div``

const Mobile = styled.div`
  @media only screen and (${screen.lg}) {
    display: none;
  }

  ${ContactLink} {
    margin-top: 3rem;
  }

  ${Settings} {
    display: inline-flex;
    gap: 0.5rem;
    position: absolute;
    bottom: 100px;
  }
`

export { Navbar, Desktop, Menu, MenuItem, ContactLink, Mobile, MobileMenu, Settings, Burger, ButtonWrapper, BlackLayer }