import styled from 'styled-components'
import * as Switch from '@radix-ui/react-switch'

export const HomeContainer = styled.div`
  width: 100%;
  max-width: 588px;
  margin: 56px auto 0;
  padding: 0 24px;
  text-align: center;
`

export const SwitchContainer = styled.div`
  width: 64px;
  position: relative;
  margin: 4px auto;
`

export const SwitchRoot = styled(Switch.Root)`
  width: 64px;
  height: 24px;
  background: ${(props) => props.theme.colors.surfaceColor};
  border-radius: 9999px;
  position: relative;
  border: 1px solid ${(props) => props.theme.colors.strokeColor};
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
`

export const SwitchThumb = styled(Switch.Thumb)`
  display: block;
  width: 32px;
  height: 32px;
  background: white ${(props) => props.theme.background.backgroundSvg} no-repeat
    center;
  border-radius: 9999px;
  border: 0;

  position: relative;
  top: 50%;

  transition: transform 100ms;
  transform: translateX(-3px) translateY(-50%);
  will-change: transform;

  &:hover {
    outline: 8px solid ${(props) => props.theme.colors.highLightColor};
  }

  &[data-state='checked'] {
    transform: translateX(36px) translateY(-50%);
  }
`
