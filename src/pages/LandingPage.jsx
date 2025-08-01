import React from 'react'
import '../index.css'
import { ScanBarcode } from 'lucide-react'
import backgroundpic from '../assets/arogyambg.jpg' 
import nutritionLabelImage from '../assets/nutritionlabelv5.png'

const LandingPage = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className='font-inter h-screen bg-cover bg-center bg-no-repeat absolute top-0 left-0 w-full' 
                style={{backgroundImage: `url(${backgroundpic})`, filter: 'brightness(0.9)'}}>
                    {/* Section Container */}
                    <div className='min-h-screen container mx-auto px-8 flex flex-col md:flex-row items-center justify-start md:justify-between pt-24 md:pt-0 md:items-center'>
                        {/* Text and Button Container */}
                        <div className='w-full md:flex-1 text-white space-y-8 md:space-y-10 px-4 md:px-8 text-center md:text-left'>
                            <h1 className='font-semibold text-5xl md:text-6xl lg:text-8xl'>We help you see <span className='italic'>beyond</span> the label</h1>
                            <button className="font-inter text-2xl md:text-1xl flex items-center justify-center space-x-2 px-5 py-2 bg-secondarygreen md:bg-primarygreen hover:scale-105 rounded-lg transition-all duration-300 text-white cursor-pointer mx-auto md:mx-0">
                                <div>Start Scanning</div>
                                <ScanBarcode size={30} />
                            </button>
                        </div>

                        {/* Image Container */}
                        <div className='w-full md:flex-1 flex justify-center mt-8 md:mt-0'>
                            <img src={nutritionLabelImage} alt="Nutrition label example" className="drop-shadow-xl rounded-2xl md:rotate-2 w-90 lg:w-lg"/>
                        </div>
                    </div>
            </section>

            <section className='h-screen bg-black'>

            </section>
        </div>
    )
  }

export default LandingPage

