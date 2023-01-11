import { ProfileContainer } from './styles'

import profilePng from '../../../../assets/avatar.png'

export function Profile() {
  return (
    <ProfileContainer>
      <img src={profilePng} alt="Imagem de Felipe" />

      <p>@felipemattiolij</p>
    </ProfileContainer>
  )
}
