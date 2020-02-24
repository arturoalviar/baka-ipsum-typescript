import styled from 'styled-components'

const IpsumBodyCopy = styled.div`
  padding-bottom: 2rem;
  h2 {
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.125rem;
    line-height: 1.6;
    margin: 0;
    &:not(:last-of-type) {
      margin-bottom: 1.125rem;
    }
  }
`

export { IpsumBodyCopy }
