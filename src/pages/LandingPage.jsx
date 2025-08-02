import React from 'react'
import '../index.css'
import Hero from '../sections/Hero.jsx'
import About from '../sections/About.jsx'
import Guide from '../sections/Guide.jsx'
import Faq from '../sections/Faq.jsx'

const LandingPage = () => {
    return (
        <div>
            <Hero/>
            <About/>
            <Guide/>
            <Faq/>
        </div>
    )
  }

export default LandingPage

