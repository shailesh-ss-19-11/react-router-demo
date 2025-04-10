import React from 'react'
import AboutInfo from './AboutInfo'
import CareerInfo from './CareerInfo'

const About = () => {
  return (
    <div>About
      <AboutInfo name="shailesh">
        <CareerInfo age={25} />
      </AboutInfo>
    </div>
  )
}

export default About