import React from 'react'
import Helmet from 'react-helmet'

import colors from '../styles/theme/colors'

interface IHeadProps {
  title?: string
  description?: string
}

const defaults = {
  title: 'Home',
  description:
    'A useless ipsum generator that uses common Japanese words from anime.',
}

const Head: React.FC<IHeadProps> = ({
  title = defaults.title,
  description = defaults.description,
}) => {
  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={title}
      titleTemplate="%s | Baka Ipsum"
    >
      <meta name="theme-color" content={colors.primary} />
    </Helmet>
  )
}

export default Head
