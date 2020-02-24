import React from 'react'
import Head from '../components/Head'
import { AboutGrid } from '../styles/layout/about'

const About: React.FC = () => {
  return (
    <div className="baka-about">
      <Head title="About" />
      <AboutGrid>
        <div>
          <h1>About</h1>
          <p>
            Lorem Ipsum is a filler text commonly used to demonstrate the
            graphic elements of a document or visual presentation. Replacing
            meaningful content with placeholder text allows viewers to focus on
            graphic aspects such as font, typography, and page layout without
            being distracted by the content.
          </p>
          <p>
            I made バカ•イプサム (Baka Ipsum) back in 2015 and decided to
            rebuild it without node. I themed this app after Aqua from the anime
            Konosuba (Kono Subarashii Sekai ni Shukufuku wo!) since they are
            both useless.
          </p>
          <p>This app was made with React and TypeScript.</p>
        </div>
      </AboutGrid>
    </div>
  )
}

export default About
