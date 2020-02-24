import React, { useState, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import ToggleButton from '../styles/components/themeToggle'

interface IThemeToggleProps {
  toggleThemeMode: () => void
}

const ThemeToggle: React.FC<IThemeToggleProps> = ({ toggleThemeMode }) => {
  const themeContext = useContext(ThemeContext)
  const initalTheme = themeContext.mode === 'light' ? 'dark' : 'light'
  const [otherTheme, setOtherTheme] = useState(initalTheme)

  const handleClick = (event: any) => {
    event.preventDefault()
    const updatedOtherTheme = otherTheme === 'light' ? 'dark' : 'light'
    setOtherTheme(updatedOtherTheme)
    toggleThemeMode()
  }

  return (
    <ToggleButton onClick={handleClick}>Toggle {otherTheme} theme</ToggleButton>
  )
}

export default ThemeToggle
