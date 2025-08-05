import React from 'react'
import { useState } from 'react'
import { Link, useNavigate,  } from 'react-router-dom'
import logo from '../assets/arogyamlogo.png'
import { UserPlus, Menu, X } from 'lucide-react'
import '../index.css'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
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
        if(element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start'})
        }
  
      }, 500) 
    } else {
      const element = document.getElementById(sectionId); 
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    handleNavItemClick(); 
  }

  return (
    <>
      {/* Large screen view */}
      <div className='hidden lg:flex justify-between min-h-16 mx-auto mt-3 px-5 w-9/12 rounded-full bg-black sticky top-3 z-50'>
        <button onClick={handleLogoClick} className='my-auto cursor-pointer'>
          <img src={logo} alt="Arogyam Logo" className='h-12'/>
        </button>

        <div className='flex justify-between font-inter text-white my-auto space-x-9'>
          <div className='nav-text' onClick={() => scrollToSection('about')}>About</div>
            <div className='nav-text' onClick={() => scrollToSection('guide')}>Guide</div>
            <div className='nav-text' onClick={() => scrollToSection('faq')}>FAQ</div>
        </div>

        <div className='flex rounded-full font-inter font-light text-white my-auto space-x-2 px-5 py-2 bg-primarygreen hover:bg-secondarygreen transition-colors duration-250 cursor-pointer'>
            <div>Sign In</div>
            <UserPlus size={20} strokeWidth={1.25}/>
        </div>
      </div>

      {/* Mobile View (anything smaller than large) */}
      <div className='lg:hidden flex justify-between min-h-16 px-5 py-3 w-full bg-black sticky top-0 z-50'>
        <button onClick={handleLogoClick} className='my-auto'>
          <img src={logo} alt="Arogyam Logo" className='h-12'/>
        </button>
        {isMobileMenuOpen ? (
          <X size={30} color="#ffffff" className='my-auto cursor-pointer transition-transform duration-400' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}/>
        ) : (
          <Menu size={30} color="#ffffff" className='my-auto cursor-pointer transition-transform duration-400' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}/>
        )}
      </div>

      {/* Invisible Overlay for click to close menu*/}
      { isMobileMenuOpen && (
        <div
          className='lg:hidden fixed inset-0 z-30 bg-transparent'
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      { /* Mobile Menu Drop Down*/}
      {isMobileMenuOpen && (
        <div className='mobile-menu-enter lg:hidden absolute z-40 space-y-4 top-17 px-5 py-5 w-full bg-black text-white font-inter font-light'>
          <div className='cursor-pointer hover:text-lightgreen transition-colors duration-150' onClick={() => scrollToSection('about')}>About</div>
          <div className='cursor-pointer hover:text-lightgreen transition-colors duration-150' onClick={() => scrollToSection('guide')}>Guide</div>
          <div className='cursor-pointer hover:text-lightgreen transition-colors duration-150' onClick={() => scrollToSection('faq')}>FAQ</div>
          <div className='flex max-w-28 items-center justify-center rounded-lg font-inter space-x-2 px-3 py-2 bg-primarygreen hover:bg-secondarygreen transition-colors duration-250 cursor-pointer' onClick={handleNavItemClick}>
            <div>Sign In</div>
            <UserPlus size={20} strokeWidth={1.25}/>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar