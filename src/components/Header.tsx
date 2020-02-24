import React from 'react'
import { Link } from '@reach/router'
import Nav from './Nav'
import ThemeToggle from './ThemeToggle'
import Container from '../styles/layout/container'
import Banner from '../styles/components/banner'

interface IHeaderProps {
  toggleThemeMode: () => void
}

const Header: React.FC<IHeaderProps> = ({ toggleThemeMode }) => (
  <Banner>
    <Nav toggle={<ThemeToggle toggleThemeMode={toggleThemeMode} />} />
    <header>
      <Container>
        <h1 style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
          <Link to="/">バカ•イプサム</Link>
        </h1>
        <h2>A useless ipsum generator</h2>
      </Container>
    </header>
  </Banner>
)

export default Header
