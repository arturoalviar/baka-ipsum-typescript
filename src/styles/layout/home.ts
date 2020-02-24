import styled from 'styled-components'

const HomeGrid = styled.div`
  width: 100%;
  video {
    display: none;
    height: 280px;
    width: 100%;
  }
  ${props => props.theme.minMedia.sm`
    display: flex;
    video {
      display: block;
      flex: 1;
      height: auto;
      max-width: 33%;
      margin-right: 2rem;
    }
    div {
      flex: 3;
    }
  `}
`

export { HomeGrid }
