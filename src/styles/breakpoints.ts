import { css } from 'styled-components'

const breakpoints = {
  xs: 400,
  sm: 600,
  md: 900,
  lg: 1200,
}

type BreakpointKey = 'xs' | 'sm' | 'md' | 'lg'

// Iterate through the breakpoints and create a media template
const maxMedia = Object.keys(breakpoints).reduce((acc: any, label: string) => {
  acc[label] = (...args: any) => css`
    @media (max-width: ${breakpoints[label as BreakpointKey] / 16}rem) {
      // @ts-ignore
      ${css(...args)}
    }
  `
  return acc
}, {})

const minMedia = Object.keys(breakpoints).reduce((acc: any, label: string) => {
  acc[label] = (...args: any) => css`
    @media (min-width: ${breakpoints[label as BreakpointKey] / 16}rem) {
      // @ts-ignore
      ${css(...args)}
    }
  `
  return acc
}, {})

export { minMedia, maxMedia }
