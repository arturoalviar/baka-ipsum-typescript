import { CSSProperties } from 'react'
import styled from 'styled-components'

const sliderCSS: CSSProperties = {
  position: 'relative',
  width: '100%',
  height: 80,
}

const trackDefaultCSS: CSSProperties = {
  position: 'absolute',
  width: '100%',
  height: 8,
  borderRadius: 4,
  cursor: 'pointer',
}

const SliderWrapper = styled.div`
  position: relative;
  label {
    display: block;
    font-size: 1.125rem;
    font-weight: normal;
    margin-bottom: 1rem;
  }
  .slider-rail {
    background-color: ${props => {
      const { mode } = props.theme
      return props.theme.colors[mode].slider
    }};
  }
`

export { sliderCSS, trackDefaultCSS, SliderWrapper }
