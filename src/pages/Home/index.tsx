import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Footer } from './components/Footer'
import { Links } from './components/Links'
import { Profile } from './components/Profile'
import { Social } from './components/Social'
import {
  HomeContainer,
  SwitchRoot,
  SwitchThumb,
  SwitchContainer,
} from './styles'

interface Props {
  handleChangeTheme: () => void
}

export function Home({ handleChangeTheme }: Props) {
  const { title } = useContext(ThemeContext)

  return (
    <HomeContainer>
      <Profile />

      <SwitchContainer>
        <SwitchRoot
          onCheckedChange={handleChangeTheme}
          checked={title === 'dark'}
        >
          <SwitchThumb />
        </SwitchRoot>
      </SwitchContainer>

      <Links />

      <Social />

      <Footer />
    </HomeContainer>
  )
}
