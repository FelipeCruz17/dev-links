import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) =>
      props.theme.background.backgroundImage} no-repeat top center /cover;
    -webkit-font-smoothing: antialiased;
    color: ${(props) => props.theme.colors.textColor}
  }

  body, input, textarea, button {
    font: 400 1rem "Inter", sans-serif;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    all: unset;
  }
`
