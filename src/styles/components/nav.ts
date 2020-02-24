import styled from 'styled-components'
import Container from '../layout/container'

const NavContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
`

const NavLinks = styled.ul`
  display: flex;
  align-item: center;
  padding: 0;
  margin: 0;
  list-style: none;
  li {
    font-size: 1.125rem;
    font-weight: bold;
    padding: 0.5rem;
    button {
      font-size: 1.125rem;
    }
  }
`

export { NavContainer, NavLinks }
