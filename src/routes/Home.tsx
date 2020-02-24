import React from 'react'
import IpsumForm from '../components/IpsumForm'
import { HomeGrid } from '../styles/layout/home'

const Home: React.FC = () => {
  return (
    <div className="baka-home">
      <HomeGrid>
        <video
          className="video media"
          autoPlay
          loop
          playsInline
          preload="auto"
          poster="https://thumbs.gfycat.com/DentalNastyHoneybee-mobile.jpg"
        >
          <source
            src="https://thumbs.gfycat.com/DentalNastyHoneybee-mobile.mp4"
            type="video/mp4"
          />
          <source
            src="https://giant.gfycat.com/DentalNastyHoneybee.webm"
            type="video/webm"
          />
          <source
            src="https://giant.gfycat.com/DentalNastyHoneybee.mp4"
            type="video/mp4"
          />
          <source
            src="https://thumbs.gfycat.com/DentalNastyHoneybee-mobile.mp4"
            type="video/mp4"
          />
        </video>
        <IpsumForm />
      </HomeGrid>
    </div>
  )
}

export default Home
