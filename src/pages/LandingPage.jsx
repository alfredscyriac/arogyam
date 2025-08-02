import React from 'react'
import Hero from '../sections/Hero.jsx'
import '../index.css'
import About from '../sections/About.jsx'
import Guide from '../sections/Guide.jsx'

const LandingPage = () => {
    return (
        <div>
            <Hero/>
            <About/>
            <Guide/>
        </div>
    )
  }

export default LandingPage

