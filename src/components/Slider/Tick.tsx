import React from 'react'
import { SliderItem } from 'react-compound-slider'
import styled from 'styled-components'

interface SliderTickProps {
  key: string
  tick: SliderItem
  count: number
}

interface ITickIndicator {
  left: string
}

interface ITickValue {
  mLeft: string
  width: string
  left: string
}

const TickIndicator = styled.div<ITickIndicator>`
  position: absolute;
  margin-top: 8px;
  width: 1px;
  height: 8px;
  background-color: ${props => props.theme.colors.primary};
  left: ${props => props.left};
`

const TickValue = styled.div<ITickValue>`
  position: absolute;
  margin-top: 16px;
  font-size: 0.85rem;
  font-weight: 700;
  text-align: center;
  margin-left: ${props => props.mLeft};
  left: ${props => props.left};
  width: ${props => props.width};
`

const Tick: React.FC<SliderTickProps> = ({ tick, count }) => {
  return (
    <div>
      <TickIndicator left={`${tick.percent}%`} />
      <TickValue
        mLeft={`${-(100 / count) / 2}%`}
        width={`${100 / count}%`}
        left={`${tick.percent}%`}
      >
        {tick.value}
      </TickValue>
    </div>
  )
}

export default Tick
