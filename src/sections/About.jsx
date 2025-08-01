import React from 'react'
import '../index.css'
import headshot from '../assets/feb25headshot.jpg'

const About = () => {
  return (
    <div className='w-full h-[101vh] flex items-center justify-center bg-darkazure'>
        <div className='container mx-auto px-6 md:px-12 lg:px-16 space-y-10'>
            {/* Headline */}
            <div className='text-center md:mt-4'>
                <h1 className='text-[27px] font-inter font-semibold text-white italic leading-relaxed'>
                    Millions of people with health conditions{' '}
                    <span className='bg-primarygreen px-1 py-1'>unknowingly</span>{' '}
                    consume harmful ingredients daily
                </h1>
            </div>

            {/* Cards Container */}
            <div className='flex flex-col lg:flex-row gap-6 lg:gap-8'>
                <div className='flex-1 bg-gradient-to-br from-red-900 to-orange-600 rounded-2xl p-6 md:p-8'>
                    <div className='font-inter font-light text-white text-justify text-[17px]'>Healthcare professionals give proper advice on what to avoid, 
                    but the consumer market makes it impossible to follow. Companies make products with lengthy ingredients lists and use 
                    technical ingredient names that hide what they truly are.<br/><br/>Someone with celiac disease may be eating on a strict gluten-free 
                    diet but may never realize that they are coming into constant contact with gluten as their eyeliner actually contains gluten 
                    disguised as “hydrolyzed wheat protein.”<br/><br/>This is a major problem on the rise and we believe everyone deserves to know what's really in their products.</div>
                </div>

                <div className='flex-1 bg-gradient-to-br from-emerald-500 to-teal-800 rounded-2xl p-6 md:p-8'>
                    <div className='font-inter font-light text-white text-justify text-[17px]'>Arogyam translates complex ingredient lists into simple 
                    safety answers. <span className='font-semibold'>Scan. Check. Stay Safe.</span><br/><br/>When you scan the barcode of any product, 
                    we identify its ingredients list. From there we use artificial intelligence to identify if any ingredients are unsafe for our users  
                    based of their entered list of avoidances.<br/><br/>Our mission at Arogyam is to empower people to take control of their health and 
                    make ingredient transparency accessible to everyone. </div>
                </div>
            </div>

            {/* Founder Section */}
            <div className='flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8'>
                {/* Headshot and Name */}
                <div className='flex flex-col md:flex-row items-center gap-4'>
                    <img className='w-20 h-20 md:w-24 md:h-24 rounded-full' src={headshot}/>
                    <div className='text-center md:text-left'>
                        <h3 className='text-xl md:text-2xl font-semibold text-white'>Alfred Siby Cyriac</h3>
                        <p className='text-gray-300'>Creator of Arogyam</p>
                        <p className='text-md text-white italic'>
                        "The name Arogyam comes from my native language, Malayalam, and it translates to{' '}
                        <span className='text-lightgreen font-semibold'>strength</span>,{' '}
                        <span className='text-lightgreen font-semibold'>health</span>, and{' '}
                        <span className='text-lightgreen font-semibold'>wellness</span>."
                    </p>
                    </div>
                </div>

            

            </div>

        </div>

    </div>
  )
}

export default About