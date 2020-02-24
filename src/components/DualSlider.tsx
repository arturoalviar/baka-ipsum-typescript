import React, { useState } from 'react'
import { Slider, Rail, Handles, Tracks, Ticks } from 'react-compound-slider'
import { Handle, Tick, Track } from './Slider'
import {
  sliderCSS,
  trackDefaultCSS,
  SliderWrapper,
} from '../styles/components/slider'
import { GRange } from '../helpers/generator'

interface IDualSliderProps {
  name: string
  label: string
  range: GRange
  step?: number
  updateBounds: (key: string, updatedBounds: GRange) => void
}

const DualSlider: React.FC<IDualSliderProps> = ({
  label,
  name,
  updateBounds,
  range,
  step = 1,
}) => {
  const [bounds, setBounds] = useState<GRange>(range)
  const domain: number[] = [range.min, range.max]
  const ticks = range.max - range.min
  const values = [range.min + 1, range.max - 1]

  const handleChange = (values: any) => {
    const [min, max] = values
    const updatedBounds = { min, max }
    setBounds(updatedBounds)
    // pass prop name and local range state
    updateBounds(name, updatedBounds)
  }

  return (
    <SliderWrapper>
      <label>{label}</label>
      <Slider
        rootStyle={sliderCSS}
        domain={domain}
        values={values}
        step={step}
        onChange={handleChange}
      >
        <Rail>
          {({ getRailProps }) => (
            <div
              className="slider-rail"
              style={trackDefaultCSS}
              {...getRailProps()}
            />
          )}
        </Rail>
        <Handles>
          {({ handles, getHandleProps }) => (
            <div className="slider-handles">
              {handles.map(handle => (
                <Handle
                  key={handle.id}
                  handle={handle}
                  domain={domain}
                  getHandleProps={getHandleProps}
                />
              ))}
            </div>
          )}
        </Handles>
        <Tracks left={false} right={false}>
          {({ tracks, getTrackProps }) => (
            <div className="slider-tracks">
              {tracks.map(({ id, source, target }) => (
                <Track
                  key={id}
                  source={source}
                  target={target}
                  getTrackProps={getTrackProps}
                />
              ))}
            </div>
          )}
        </Tracks>
        <Ticks count={ticks}>
          {({ ticks }) => (
            <div className="slider-ticks">
              {ticks.map(tick => (
                <Tick key={tick.id} tick={tick} count={ticks.length} />
              ))}
            </div>
          )}
        </Ticks>
      </Slider>
    </SliderWrapper>
  )
}

export default DualSlider
