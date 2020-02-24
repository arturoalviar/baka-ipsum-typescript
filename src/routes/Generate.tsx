import React from 'react'
import Head from '../components/Head'
import IpsumForm from '../components/IpsumForm'
import IpsumBody from '../components/IpsumBody'
import queryString from 'query-string'

const Generate: React.FC = (props: any) => {
  let paragraphs = 5
  let wordsPerSentenceRange = { min: 5, max: 16 }

  const queryParams = queryString.parse(props.location.search)
  if (queryParams && !props.location.state) {
    paragraphs = queryParams.paragraphs ? +queryParams.paragraphs : 5
  }
  if (props.location.state) {
    paragraphs = props.location.state.paragraphs
    wordsPerSentenceRange = props.location.state.wordsPerSentenceRange
  }

  return (
    <div className="baka-generate">
      <Head title="Generate" />
      <IpsumBody
        paragraphs={paragraphs}
        wordsPerSentenceRange={wordsPerSentenceRange}
      />
      <h2>Generate more text</h2>
      <IpsumForm />
    </div>
  )
}

export default Generate
