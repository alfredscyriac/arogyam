import React from 'react'
import '../index.css'
import logo from '../assets/arogyamlogo.png'
import { Github } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        if (window.location.pathname === '/') {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
          navigate('/')
        }
    }

    const scrollToSection = (sectionId) => {
        if (window.location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start',
                        inline: 'nearest'
                    });
                }
            }, 500);
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest'
                });
            }
        }
    };

    return (
    <footer className='bg-black text-white font-inter font-light py-16 md:py-20'>
        <div className='container mx-auto px-6 md:px-10 lg:px-12'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12'>
                {/* Left Column - Project Branding */}
                <div className='space-y-6'>
                    <Link to="/">
                        <img src={logo} alt="Arogyam Logo" className='h-12'/>
                    </Link>
                    <p className='text-gray-300 leading-relaxed max-w-sm'>
                        A software created to assist those with health conditions identify harmful and misleading ingredients in the products that they consume. 
                    </p>
                    <div className='flex space-x-4'>
                        <a href="https://github.com/alfredscyriac/arogyam" target="_blank" className='text-gray-400 hover:text-lightgreen transition-colors hover:cursor-pointer'><Github/></a>
                    </div>

                </div>

                {/* Middle Column - Navigation Links */}
                <div className='space-y-6'>
                    <h3 className='text-xl font-semibold'>Company</h3>
                    <ul className='space-y-3'>
                        <li>
                            <button onClick={handleHomeClick} className='text-gray-300 hover:text-lightgreen transition-colors'>
                                Home
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('about')} className='text-gray-300 hover:text-lightgreen transition-colors text-left'>
                                About
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('guide')} className='text-gray-300 hover:text-lightgreen transition-colors text-left'>
                                Guide
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('faq')} className='text-gray-300 hover:text-lightgreen transition-colors text-left'>
                                FAQ
                            </button>
                        </li>
                    </ul>
                </div>

                {/* Right Column - Important Links */}
                <div className='space-y-6'>
                    <h3 className='text-xl font-semibold'>Important Links</h3>
                        <ul className='space-y-3'>
                            <li>
                                <Link to="/privacypolicy" className='text-gray-300 hover:text-lightgreen transition-colors'>
                                    Privacy Policy
                                </Link>
                            </li>
                            <li >
                                <Link to="/termsofservice" className='text-gray-300 hover:text-lightgreen transition-colors'>
                                    Terms of Service
                                </Link>
                            </li>
                            <li className='text-gray-300 hover:text-lightgreen transition-colors'>Provide Feedback</li>
                            <li className='text-gray-300 hover:text-lightgreen transition-colors'>Create a Ticket</li>
                        </ul>
                </div>
            </div>
            
            {/* Copyright Statement Line */}
            <div className='mt-8 pt-6 text-left'>
                <p className='text-gray-400 font-inter font-light'>
                    © 2025 Arogyam. All rights reserved.
                </p>
            </div>

        </div>
    </footer>
  )
}

export default Footer