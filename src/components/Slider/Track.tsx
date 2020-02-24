import React from 'react'
import { SliderItem, GetTrackProps } from 'react-compound-slider'
import styled from 'styled-components'

interface SliderTrackProps {
  source: SliderItem
  target: SliderItem
  getTrackProps: GetTrackProps
}

interface ITrackStyle {
  width: string
  left: string
}

const TrackStyle = styled.div<ITrackStyle>`
  position: absolute;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${props => props.theme.colors.accent};
  left: ${props => props.left};
  width: ${props => props.width};
`

const Track: React.FC<SliderTrackProps> = ({
  source,
  target,
  getTrackProps,
}) => {
  return (
    <TrackStyle
      left={`${source.percent}%`}
      width={`${target.percent - source.percent}%`}
      {...getTrackProps()}
    />
  )
}

export default Track
