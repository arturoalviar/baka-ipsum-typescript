import words from './words'

export interface GRange {
  min: number
  max: number
}

export interface GeneratorOptions {
  paragraphs: number
  wordsPerSentenceRange: GRange
  sentencesPerParagraphRange?: GRange
}

class Generator {
  private _paragraphs: number
  private _wordsPerSentenceRange: GRange
  private _sentencesPerParagraphRange: GRange
  private punctuation: string[]
  private words: string[]
  private totalWords: number
  private totalPunctuationMarks: number

  constructor({
    paragraphs,
    wordsPerSentenceRange,
    sentencesPerParagraphRange = { min: 3, max: 10 },
  }: GeneratorOptions) {
    this.punctuation = ['ne?', 'yo!', 'desu.', 'deshou?', 'darou?']
    this.words = words
    this.totalWords = this.words.length
    this.totalPunctuationMarks = this.punctuation.length
    this._paragraphs = paragraphs
    this._wordsPerSentenceRange = wordsPerSentenceRange
    this._sentencesPerParagraphRange = sentencesPerParagraphRange
  }

  static generateRandomNumber(min: number, max: number) {
    return min === max ? min : Math.floor(Math.random() * (max - min + 1) + min)
  }

  generatePunctutation() {
    const random = Generator.generateRandomNumber(
      0,
      this.totalPunctuationMarks - 1
    )

    return this.punctuation[random]
  }

  generateWord(isCapitalized = false) {
    const random = Generator.generateRandomNumber(0, this.totalWords - 1)
    if (isCapitalized) {
      const word = this.words[random].split('')

      return word[0].toUpperCase() + word.splice(1).join('')
    }

    return this.words[random]
  }

  generateSentence(size?: number) {
    const { min, max } = this._wordsPerSentenceRange
    const words = size || Generator.generateRandomNumber(min, max)
    // make an array of a specific or random size
    const sentence = Array(words)
      // fill the array with blanks so we can reduce it
      .fill(' ')
      // start each sentence with a random punctuation
      .reduce((acc: string, _: string, index: number): string => {
        // since the sentence is built backwards, we pass in a statement as a param
        // the statement will be true for the last word which needs to be capitalized
        return `${this.generateWord(words === index + 1)} ${acc}`
      }, this.generatePunctutation())
      .trim()

    return sentence
  }

  generateParagraph(size?: number) {
    const sentences = size || 5
    const paragraph = Array(sentences)
      .fill(' ')
      .reduce((acc: string): string => {
        return `${acc} ${this.generateSentence()}`
      }, '')
      .trim()

    return paragraph
  }

  generateBodyCopy(size?: number) {
    const paragraphs = size || this._paragraphs
    const body = Array(paragraphs)
      .fill(' ')
      .map((_: any): string => `${this.generateParagraph()}`)

    return body
  }
}

export default Generator
