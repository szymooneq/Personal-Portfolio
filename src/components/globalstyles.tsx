import { createGlobalStyle } from 'styled-components'

// TODO: Remove import font
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, Inter, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    text-rendering: optimizeLegibility;
    color: rgb(${({ theme }) => theme.colors.textRGB});
    background: rgb(${({ theme }) => theme.colors.backgroundPrimaryRGB});
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  #nprogress {
    z-index: 999;
  }
`

export default GlobalStyle
