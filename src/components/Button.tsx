import React, { MouseEvent } from 'react'
import styled from 'styled-components'
import theme from 'styled-theming'
import button from '../styles/components/button'

type Variant = 'primary' | 'default'

type ButtonProps = {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  variant?: Variant
}

const { defaultStyles } = button
const primaryStyles = theme.variants('mode', 'variant', button.primaryStyles)

const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  onClick,
  children,
}) => {
  const ButtonWrapper = styled.button<ButtonProps>`
    ${defaultStyles}
    ${primaryStyles}
  `
  return (
    <ButtonWrapper variant={variant} onClick={onClick}>
      {children}
    </ButtonWrapper>
  )
}

export default Button
