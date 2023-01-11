import { ThemeProvider, DefaultTheme } from 'styled-components'
import usePersistedState from './utils/usePersistedState'

import light from './styles/themes/light'
import dark from './styles/themes/dark'
import { GlobalStyle } from './styles/global'

import { Home } from './pages/Home'

export function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  function handleChangeTheme() {
    setTheme(theme.title === 'dark' ? light : dark)
    console.log(theme)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home handleChangeTheme={handleChangeTheme} />
    </ThemeProvider>
  )
}
