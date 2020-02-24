import React, { ReactNode } from 'react'
import { Link } from '@reach/router'
import { NavContainer, NavLinks } from '../styles/components/nav'

interface INavProps {
  toggle: ReactNode
}

const Nav: React.FC<INavProps> = ({ toggle }) => {
  return (
    <NavContainer>
      <nav>
        <NavLinks>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Github
            </a>
          </li>
          <li>{toggle}</li>
        </NavLinks>
      </nav>
    </NavContainer>
  )
}

export default Nav
