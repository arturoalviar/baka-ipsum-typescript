import '@openfonts/noto-sans-jp_japanese'
import React, { useState } from 'react'
import { Router } from '@reach/router'
import { ThemeProvider } from 'styled-components'

import Home from '../routes/Home'
import About from '../routes/About'
import Generate from '../routes/Generate'
import NotFound from '../routes/NotFound'
import Head from './Head'
import Header from './Header'
import Wrapper from './Wrapper'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const App: React.FC = () => {
  const storedTheme = localStorage.getItem('bakaTheme')
  const { mode } = storedTheme ? JSON.parse(storedTheme) : theme

  const initalTheme = storedTheme ? { ...theme, mode } : theme
  const [currentTheme, setCurrentTheme] = useState(initalTheme)

  const toggleThemeMode = () => {
    const updatedTheme = { ...currentTheme }
    const toggled = updatedTheme.mode === 'light' ? 'dark' : 'light'

    updatedTheme.mode = toggled
    localStorage.setItem('bakaTheme', JSON.stringify(updatedTheme))
    setCurrentTheme(updatedTheme)
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <div className="App">
        <Head />
        <GlobalStyle />
        <Header toggleThemeMode={toggleThemeMode} />
        <Wrapper>
          <Router>
            <NotFound path="*" />
            <Home path="/" />
            <About path="/about" />
            <Generate path="generate" />
          </Router>
        </Wrapper>
      </div>
    </ThemeProvider>
  )
}

export default App
