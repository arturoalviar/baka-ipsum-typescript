import React from 'react'
import { Link } from '@reach/router'
import Head from '../components/Head'

const NotFound: React.FC = () => {
  return (
    <div className="baka-not-found">
      <Head title="404" />
      <h1>
        This page is as useless as Aqua. <br />{' '}
        <Link to="/">Take me back home</Link>
      </h1>
      <video
        className="video media"
        autoPlay
        loop
        playsInline
        preload="auto"
        style={{
          display: 'block',
          marginTop: '2rem',
          width: '100%',
        }}
      >
        <source
          src="https://giant.gfycat.com/HardtofindBrokenBluejay.webm"
          type="video/webm"
        />
        <source
          src="https://giant.gfycat.com/HardtofindBrokenBluejay.mp4"
          type="video/mp4"
        />
        <source
          src="https://thumbs.gfycat.com/HardtofindBrokenBluejay-mobile.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  )
}

export default NotFound
