import React from 'react'
import Hero from '../sections/Hero.jsx'
import '../index.css'
import About from '../sections/About.jsx'

const LandingPage = () => {
    return (
        <div>
            <Hero/>
            <About/>
            <div className='h-screen'></div>
        </div>
    )
  }

export default LandingPage

