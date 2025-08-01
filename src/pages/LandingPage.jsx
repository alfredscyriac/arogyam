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
                    <div className='h-screen my-auto container mx-auto px-8 flex items-center justify-between'>
                        <div className='flex-1 text-white space-y-10 mx-8'>
                            <h1 className='font-semibold text-8xl'>We help you see <span className='italic'>beyond</span> the label</h1>
                            <button className="font-inter text-1xl flex items-center justify-center space-x-2 px-5 py-2 bg-primarygreen hover:scale-105 rounded-lg transition-all duration-300 text-white cursor-pointer ">
                                <div>Start Scanning</div>
                                <ScanBarcode size={30} />
                            </button>
                        </div>

                        <div className='flex-1 flex justify-center'>
                            <img src={nutritionLabelImage} alt="Nutrition label example" className="drop-shadow-xl rounded-2xl rotate-2 max-w-lg"/>
                        </div>
                    </div>
            </section>

            <section className='h-screen bg-black'>

            </section>
        </div>
    )
  }

export default LandingPage

