import styled from 'styled-components'

const Banner = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: center;
  overflow: hidden;
  padding: 100px 0 0;
  z-index: 1;
  ${props => props.theme.minMedia.md`
    height: 300px;
    padding: 0;
  `}
  &:before {
    background: ${props => props.theme.colors.primary};
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 7px;
    z-index: -1;
  }
  h1,
  h2 {
    text-align: center;
  }
  h1 {
    font-size: 2rem;
    font-weight: 900;
    line-height: 1;
    letter-spacing: 0.35rem;
    ${props => props.theme.minMedia.md`
      font-size: 4rem;
    `}
  }
  h2 {
    font-size: 1.15rem;
    font-weight: 300;
    line-height: 1.2;
    margin-top: 1rem;
    text-transform: lowercase;
    ${props => props.theme.minMedia.md`
      font-size: 1.5rem;
    `}
  }
`

export default Banner
