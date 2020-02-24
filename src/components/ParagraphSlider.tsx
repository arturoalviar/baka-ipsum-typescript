import React, { useState } from 'react'
import { Slider, Rail, Handles, Tracks, Ticks } from 'react-compound-slider'
import { Handle, Tick, Track } from './Slider'
import {
  sliderCSS,
  trackDefaultCSS,
  SliderWrapper,
} from '../styles/components/slider'

interface IParagraphSliderProps {
  updateParagraphs: (paragraphs: number) => void
  domain?: number[]
  step?: number
}

const ParagraphSlider: React.FC<IParagraphSliderProps> = ({
  updateParagraphs,
  step = 1,
  domain = [1, 11],
}) => {
  const [paragraphs, setParagraphs] = useState(5)

  const handleChange = (values: any) => {
    const paragraphs = values[0]
    setParagraphs(paragraphs)
    updateParagraphs(paragraphs)
  }

  return (
    <SliderWrapper>
      <label>Number of paragraphs to generate</label>
      <Slider
        rootStyle={sliderCSS}
        domain={domain}
        values={[paragraphs]}
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
        <Ticks count={10}>
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

export default ParagraphSlider
