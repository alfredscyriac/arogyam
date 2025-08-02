import React from 'react'
import '../index.css'
import { User, List, Camera, Brain, Check } from 'lucide-react'

const Guide = () => {
    const steps = [
        {
            icon: <User color="#ffffff" size={28}/>,
            title: "Create Account",
            description: "Set up your profile in under 30 seconds"
        },
        {
            icon: <List color="#ffffff" size={28}/>,
            title: "Enter Avoidances", 
            description: "Tell us what ingredients you need to avoid"
        },
        {
            icon: <Camera color="#ffffff" size={28}/>,
            title: "Scan Product",
            description: "Point your camera at any barcode"
        },
        {
            icon: <Brain color="#ffffff" size={28}/>, 
            title: "AI Analysis", 
            description: "We identify hidden harmful ingredients instantly"
        },
        {
            icon: <Check color="#ffffff" size={28}/>,
            title: "View & Remember",
            description: "Get clear safety results and build your reference list"
        }
    ];
    return (
    <div className='w-full h-[101vh] flex items-center justify-center font-inter'>
        <div className='container mx-auto px-6 md:px-12 lg:px-16 space-y-8 md:space-y-16'>
            {/*Header*/}
            <div className='text-center space-y-2'>
                <h1 className='text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>How Arogyam Works</h1>
                <p className='font-light text-lg md:text-xl lg:text-2xl text-white'>5 simple steps to <span className='bg-primarygreen px-1 py-1'>safer shopping</span></p>
            </div>

            {/* Steps Container */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4 lg:gap-6'>
                {steps.map((step, index) => (
                    <div key={index} className='bg-slate-800 bg-opacity-40 backdrop-blur-md border border-slate-600 border-opacity-30 rounded-lg md:rounded-xl lg:rounded-2xl p-2 md:p-4 lg:p-6 text-center space-y-1 md:space-y-3 lg:space-y-4 shadow-2xl hover:scale-105 transition-all duration-300'>
                        <div className='mx-auto w-8 h-8 md:w-12 md:h-12 lg:w-20 lg:h-20 bg-slate-700 bg-opacity-50 rounded-full flex items-center justify-center text-white shadow-lg'>
                            {step.icon}
                        </div>
                        <h3 className='text-[16px] md:text-lg font-semibold text-white'>
                            {step.title}
                        </h3>
                        <p className='text-sm md:text-base text-gray-300 leading-relaxed'>
                            {step.description}
                        </p>
                    </div>
                ))}

            </div>

            {/* CTA Container */}
            <div className='text-center'>
                <p className='text-lg md:text-xl lg:text-3xl text-white font-light'>
                    Ready to start?{' '}
                    <span className='nav-text font-semibold cursor-pointer'>Create your account</span>
                </p>
            </div>

        </div>

    </div>
  )
}

export default Guide