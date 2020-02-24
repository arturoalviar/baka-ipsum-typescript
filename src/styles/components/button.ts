import { css } from 'styled-components'
import colors from '../theme/colors'
import theme from 'styled-theming'

const defaultStyles = css`
  border: 0;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: inherit;
  font-weight: bold;
  font-size: 1rem;
  outline: 0;
`

interface ButtonStyles {
  bg: string
  text: string
}

const makePrimaryStyles = ({ bg, text }: ButtonStyles) => {
  return css`
    color: ${text};
    padding: 1rem;
    position: relative;
    z-index: 1;
    &:before {
      content: '';
      cursor: pointer;
      background: ${bg};
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      z-index: -1;
    }
  `
}

const primaryStyles: theme.VariantMap = {
  default: {
    light: makePrimaryStyles({
      bg: colors.gray,
      text: colors.light.text,
    }),
    dark: makePrimaryStyles({
      bg: colors.gray,
      text: colors.light.text,
    }),
  },
  primary: {
    light: makePrimaryStyles({
      bg: colors.primary,
      text: colors.dark.text,
    }),
    dark: makePrimaryStyles({
      bg: colors.primary,
      text: colors.dark.text,
    }),
  },
}

const button = {
  defaultStyles,
  primaryStyles,
}

export default button
