import React from 'react'
import '../index.css'
import logo from '../assets/arogyamlogo.png'
import { Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='bg-black text-white font-inter font-light py-16 md:py-20'>
        <div className='container mx-auto px-6 md:px-10 lg:px-12'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12'>
                {/* Left Column - Project Branding */}
                <div className='space-y-6'>
                    <img src={logo} alt="Arogyam Logo" className='h-12'/>
                    <p className='text-gray-300 leading-relaxed max-w-sm'>
                        A software created to assist those with health conditions identify harmful and misleading ingredients in the products that they consume. 
                    </p>
                    <div className='flex space-x-4'>
                        <a href="https://github.com/alfredscyriac" target="_blank" className='text-gray-400 hover:text-lightgreen transition-colors hover:cursor-pointer'><Github/></a>
                    </div>

                </div>

                {/* Middle Column - Navigation Links */}
                <div className='space-y-6'>
                    <h3 className='text-xl font-semibold'>Company</h3>
                    <ul className='space-y-3'>
                        <li><a href="#" className='text-gray-300 hover:text-lightgreen transition-colors'>Home</a></li>
                        <li><a href="#" className='text-gray-300 hover:text-lightgreen transition-colors'>About</a></li>
                        <li><a href="#" className='text-gray-300 hover:text-lightgreen transition-colors'>Guide</a></li>
                        <li><a href="#" className='text-gray-300 hover:text-lightgreen transition-colors'>FAQ</a></li>
                    </ul>
                </div>

                {/* Right Column - Important Links */}
                <div className='space-y-6'>
                    <h3 className='text-xl font-semibold'>Important Links</h3>
                        <ul className='space-y-3'>
                            <li><a href="#" className='text-gray-300 hover:text-lightgreen transition-colors'>Privacy Policy</a></li>
                        </ul>
                </div>
            </div>
            
            {/* Copyright Statement Line */}
            <div className='mt-8 pt-6 text-left'>
                <p className='text-gray-400 font-inter font=light'>
                    © 2025 Arogyam. All rights reserved.
                </p>
            </div>

        </div>
    </footer>
  )
}

export default Footer