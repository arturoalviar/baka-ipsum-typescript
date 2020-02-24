import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  &:after{
    box-sizing: inherit;
  }

  body {
    background: ${props => props.theme.colors[props.theme.mode].bg};
    color: ${props => props.theme.colors[props.theme.mode].text};
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    font-size: 1rem;
    line-height: 1.5;
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3 {
    margin: 0;
    padding: 0;
  }


  p {
    font-size: 1.125rem;
    line-height: 1.6;
    margin: 0;
    &:not(:last-of-type){
      margin-bottom: 1.125rem;
    }
  }
`

export default GlobalStyle
