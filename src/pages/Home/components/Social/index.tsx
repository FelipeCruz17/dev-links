import { SocialContainer } from './styles'
import {
  GithubLogo,
  LinkedinLogo,
  InstagramLogo,
  TwitterLogo,
} from 'phosphor-react'
import { useTheme } from 'styled-components'

export function Social() {
  const {
    colors: { textColor },
  } = useTheme()
  return (
    <SocialContainer>
      <a
        href="https://github.com/felipecruz17"
        target="_blank"
        rel="noreferrer"
      >
        <GithubLogo size={24} color={textColor} weight="fill" />
      </a>
      <a
        href="https://www.linkedin.com/in/felipe-mattioli/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedinLogo size={24} color={textColor} weight="fill" />
      </a>
      <a
        href="https://www.instagram.com/felipemattiolij/"
        target="_blank"
        rel="noreferrer"
      >
        <InstagramLogo size={24} color={textColor} weight="fill" />
      </a>
      <a
        href="https://twitter.com/mattioli_felipe"
        target="_blank"
        rel="noreferrer"
      >
        <TwitterLogo size={24} color={textColor} weight="fill" />
      </a>
    </SocialContainer>
  )
}
