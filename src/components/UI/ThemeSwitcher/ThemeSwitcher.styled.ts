import styled from 'styled-components'

const Wrapper = styled.div`
  display: inline-flex;
	position: relative;
`

const Label = styled.label`
  display: inline-block;
	position: relative;
	width: 60px;
	height: 29px;
	border-radius: 2rem;
	background: var(--bg-secondary);
	box-shadow: var(--shadow);
	cursor: pointer;

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 5px;
    top: 2px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: transparent;
    transform: translateX(0);
    transition: transform 0.2s;

    & > svg {
      width: inherit;
      height: inherit;
    }
  }
`

// TODO: a11y styles check
const Checkbox = styled.input`
  display: block;
	position: absolute;
	top: 8px;
	left: 20px;
	opacity: 0;

  &:focus-visible + ${Label} {
	  filter: drop-shadow(0 0 0.3rem rgba(var(--text-RGB), 0.44));
  }

  &:checked + ${Label} > span {
    transform: translateX(115%);
  }
`

export { Wrapper, Label, Checkbox }