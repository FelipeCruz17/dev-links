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
    color: ${(props) => props.theme.colors.textColor};
    -webkit-font-smoothing: antialiased;
    height: 100vh;
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

  @media(min-width: 700px) {
    body {
      background: ${(props) => props.theme.background.backgroundImageDesktop};
      background-repeat: no-repeat;
      background-position: top center;
      background-size: cover;
    }
  }
`
