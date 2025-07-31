import React from 'react'
import '../index.css'
import backgroundpic from '../assets/arogyambg.jpg' 

const LandingPage = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className='font-inter h-screen bg-cover bg-center bg-no-repeat absolute top-0 left-0 w-full' 
                style={{backgroundImage: `url(${backgroundpic})`, filter: 'brightness(0.77)'}}>
            </section>

            <section className='h-screen bg-black'>

            </section>
        </div>
    )
  }

export default LandingPage

