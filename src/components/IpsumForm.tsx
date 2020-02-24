import React, { useState } from 'react'
import { navigate } from '@reach/router'
import Button from './Button'
import ParagraphSlider from './ParagraphSlider'
import DualSlider from './DualSlider'
import { GRange } from '../helpers/generator'
import { FormWrapper } from '../styles/components/ipsumForm'

interface IFormState {
  paragraphs: number
  wordsPerSentenceRange: GRange
  sentencesPerParagraph: GRange
}

const wordsPerSentenceRange = {
  min: 10,
  max: 16,
}

const sentencesPerParagraph = {
  min: 5,
  max: 10,
}

const IpsumForm: React.FC = () => {
  const [bounds, setBounds] = useState<IFormState>({
    paragraphs: 5,
    wordsPerSentenceRange,
    sentencesPerParagraph,
  })

  const handleSubmit = (event: any) => {
    event.preventDefault()
    const { paragraphs, wordsPerSentenceRange } = bounds
    navigate(`generate`, {
      state: {
        paragraphs,
        wordsPerSentenceRange,
      },
    })
  }

  const updateBounds = (key: string, updatedBound: GRange) => {
    const updatedBounds = {
      ...bounds,
      [key]: updatedBound,
    }
    setBounds(updatedBounds)
  }

  const updateParagraphs = (paragraphs: number) => {
    const state = { ...bounds }
    state.paragraphs = paragraphs
    setBounds(state)
  }

  return (
    <FormWrapper>
      <form className="ipsum-form" onSubmit={handleSubmit}>
        <ParagraphSlider updateParagraphs={updateParagraphs} />
        <DualSlider
          label={'Number of words per sentence'}
          name="wordsPerSentenceRange"
          updateBounds={updateBounds}
          range={wordsPerSentenceRange}
        />
        <DualSlider
          label={'Number of sentences per paragraph'}
          name="sentencesPerParagraph"
          updateBounds={updateBounds}
          range={sentencesPerParagraph}
        />
        <Button variant="primary">Generate text, バカ！</Button>
      </form>
    </FormWrapper>
  )
}

export default IpsumForm
