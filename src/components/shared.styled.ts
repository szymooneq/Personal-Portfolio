import styled from 'styled-components'

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

export { SrOnly }