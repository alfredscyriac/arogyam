import React from 'react'
import '../index.css'
import Hero from '../sections/Hero.jsx'
import About from '../sections/About.jsx'
import Guide from '../sections/Guide.jsx'
import Faq from '../sections/Faq.jsx'


const LandingPage = () => {
    return (
        <div>
            <div id="hero">
                <Hero/>
            </div>
            <div id="about">
                <About/>
            </div>
            <div id="guide">
                <Guide/>
            </div>
            <div id="faq">
                <Faq/>
            </div>
        </div>
    )
}

export default LandingPage

