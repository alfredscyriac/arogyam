import React from 'react'
import logo from '../assets/arogyamlogo.png'
import { UserPlus } from 'lucide-react'
import '../index.css'

const Navbar = () => {
  return (
    <div className='flex justify-between min-h-16 mx-auto my-3 px-5 w-9/12 rounded-full bg-black sticky top-3 z-50'>
        <img src={logo} alt="Arogyam Logo" className='my-auto h-12'/>

        <div className='flex justify-between font-inter text-white my-auto space-x-9'>
            <div className='nav-text'>Guide</div>
            <div className='nav-text'>FAQ</div>
            <div className='nav-text'>About Arogyam</div>
        </div>

        <div className='flex rounded-full font-inter text-white my-auto space-x-2 px-5 py-2 bg-primarygreen hover:bg-secondarygreen transition-colors duration-250 cursor-pointer'>
            <div>Sign In</div>
            <UserPlus size={20}/>
        </div>

    </div>
  )
}

export default Navbar