import styled from 'styled-components'

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 0;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    border-radius: 999px;

    transition: background 0.2s;

    &:hover {
      background: ${(props) => props.theme.colors.highLightColor};
    }
  }
`
