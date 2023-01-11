import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    colors: {
      textColor: string
      strokeColor: string
      surfaceColor: string
      surfaceColorHover: string
      highLightColor: string
    }
    background: {
      backgroundImage: string
      backgroundSvg: string
    }
  }
}
