import { DefaultTheme } from 'styled-components'
import colors from './colors'
import { minMedia, maxMedia } from '../breakpoints'

const theme: DefaultTheme = {
  mode: 'light',
  colors,
  minMedia,
  maxMedia,
}

export default theme
