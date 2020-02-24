import React, { useState, useEffect, useRef } from 'react'
import smoothscroll from 'smoothscroll-polyfill'
import { IpsumBodyCopy } from '../styles/components/ipsumBody'
import Generator, { GRange, GeneratorOptions } from '../helpers/generator'

interface IpsumBodyProps {
  paragraphs: number
  wordsPerSentenceRange: GRange
}

const IpsumBody = ({ paragraphs, wordsPerSentenceRange }: IpsumBodyProps) => {
  const [bodyText, setBodyText] = useState<string[]>([''])
  const ipsumCopyRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const options: GeneratorOptions = {
    paragraphs,
    wordsPerSentenceRange,
  }
  const generator = new Generator(options)
  let ipsumCopyTop = useRef(0) as React.MutableRefObject<number>

  // init smoothscroll on load
  useEffect(() => {
    smoothscroll.polyfill()
  }, [])

  // set and update body copy to for scrolling effect
  useEffect(() => {
    ipsumCopyTop.current = ipsumCopyRef.current.getBoundingClientRect().top
  }, [ipsumCopyTop, ipsumCopyRef])

  // regenerate text on update
  useEffect(() => {
    const generatedText = generator.generateBodyCopy(paragraphs)
    setBodyText(generatedText)

    window.scroll({
      top: ipsumCopyTop.current - 20,
      behavior: 'smooth',
    })
  }, [ipsumCopyTop, paragraphs, wordsPerSentenceRange])

  return (
    <IpsumBodyCopy ref={ipsumCopyRef}>
      <h2>Here you go, baka!</h2>
      {bodyText.length &&
        bodyText.map((paragraph: string, index: number) => (
          <p key={index}>{paragraph}</p>
        ))}
    </IpsumBodyCopy>
  )
}

export default IpsumBody
