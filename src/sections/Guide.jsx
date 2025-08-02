import React from 'react'
import '../index.css'
import { User, List, Camera, Brain, Check } from 'lucide-react'

const Guide = () => {
    const steps = [
        {
            icon: <User color="#ffffff" size={32}/>,
            title: "Create Account",
            description: "Set up your profile in under 30 seconds"
        },
        {
            icon: <List color="#ffffff" size={32}/>,
            title: "Enter Avoidances", 
            description: "Tell us what ingredients you need to avoid"
        },
        {
            icon: <Camera color="#ffffff" size={32}/>,
            title: "Scan Product",
            description: "Point your camera at any barcode"
        },
        {
            icon: <Brain color="#ffffff" size={32}/>, 
            title: "AI Analysis", 
            description: "We identify hidden harmful ingredients instantly"
        },
        {
            icon: <Check color="#ffffff" size={32}/>,
            title: "View & Remember",
            description: "Get clear safety results and build your reference list"
        }
    ];
    return (
    <div className='w-full h-[101vh] flex items-center justify-center font-inter'>
        <div className='container mx-auto px-6 md:px-12 lg:px-16 space-y-8 md:space-y-16'>
            {/*Header*/}
            <div className='text-center space-y-2'>
                <h1 className='text-3xl lg:text-5xl font-semibold text-white'>How Arogyam Works</h1>
                <p className='font-light text-2xl text-white'>5 simple steps to <span className='bg-primarygreen px-1 py-1'>safer shopping</span></p>
            </div>

            {/* Steps Container */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4'>
                {steps.map((step, index) => (
                    <div key={index} className='bg-slate-800 bg-opacity-40 backdrop-blur-md border border-slate-600 border-opacity-30 rounded-2xl p-6 text-center space-y-4 shadow-2xl hover:scale-105 transition-all duration-300'>
                        <div className='mx-auto w-16 h-16 md:w-20 md:h-20 bg-slate-700 bg-opacity-50 rounded-full flex items-center justify-center text-white shadow-lg'>
                            {step.icon}
                        </div>
                        <h3 className='text-lg font-semibold text-white'>
                            {step.title}
                        </h3>
                        <p className='text-sm  text-gray-300 leading-relaxed'>
                            {step.description}
                        </p>
                    </div>
                ))}

            </div>

            {/* CTA Container */}
            <div className='text-center'>
                <p className='text-2xl lg:text-3xl text-white font-light'>
                    Ready to start?{' '}
                    <span className='nav-text font-semibold cursor-pointer'>Create your account</span>
                </p>

            </div>
        </div>

    </div>
  )
}

export default Guide