import React from 'react'
import { SliderItem, GetHandleProps } from 'react-compound-slider'
import styled from 'styled-components'

interface SliderHandleProps {
  domain: number[]
  handle: SliderItem
  getHandleProps: GetHandleProps
}

interface IHandleStyle {
  left: string
}

const HandleStyle = styled.div<IHandleStyle>`
  position: absolute;
  margin-left: -11px;
  margin-top: -4px;
  z-index: 2;
  width: 16px;
  height: 16px;
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.08);
  background-color: ${props => props.theme.colors.accent};
  left: ${props => props.left};
`

const Handle: React.FC<SliderHandleProps> = ({
  domain: [min, max],
  handle: { id, value, percent },
  getHandleProps,
}) => {
  return (
    <HandleStyle
      role="slider"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      left={`${percent}%`}
      {...getHandleProps(id)}
    />
  )
}

export default Handle
