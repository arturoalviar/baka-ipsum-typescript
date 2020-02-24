import 'styled-components'

type ThemeMode = 'light' | 'dark'

interface ThemeModeColors {
  bg: string
  card: string
  slider: string
  text: string
}

interface CSSMediaMixin {
  xs: (block: TemplateStringsArray) => string
  sm: (block: TemplateStringsArray) => string
  md: (block: TemplateStringsArray) => string
  lg: (block: TemplateStringsArray) => string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: ThemeMode
    colors: {
      primary: string
      secondary: string
      accent: string
      gray: string
      light: ThemeModeColors
      dark: ThemeModeColors
    }
    minMedia: CSSMediaMixin
    maxMedia: CSSMediaMixin
  }
}
