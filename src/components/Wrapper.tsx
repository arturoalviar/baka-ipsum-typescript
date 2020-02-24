import React from 'react'
import Container from '../styles/layout/container'
import BakaWrapper from '../styles/layout/wrapper'

const Wrapper: React.FC = ({ children }) => {
  return (
    <BakaWrapper>
      <Container>{children}</Container>
    </BakaWrapper>
  )
}

export default Wrapper
