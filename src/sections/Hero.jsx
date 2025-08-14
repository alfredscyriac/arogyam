import React from 'react'
import '../index.css'
import { Camera } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import nutritionLabelImage from '../assets/nutritionlabelv6.png'

const Hero = () => {
  const navigate = useNavigate(); 
  const { isAuthenticated, user } = useAuthStore(); 

  const handleStartScanning= () => {
    if(isAuthenticated && user.isVerified) {
      navigate('/dashboard'); 
    } else {
      navigate('/signin');
    }
  };

  return (
    <div className='h-[90vh] container mx-auto px-8 flex flex-col md:flex-row items-center justify-start md:justify-between md:pt-0 md:items-center'>
        {/* Text and Button Container */}
        <div className='w-full md:flex-1 text-white space-y-5 md:space-y-8 px-4 md:px-8 text-center md:text-left'>
            <h1 className='mt-10 md:mt-0 font-semibold text-4xl md:text-6xl lg:text-8xl'>We help you see <span className='italic'>beyond</span> the label</h1>
            <button
              onClick={handleStartScanning} 
              className="flex items-center justify-center font-semibold text-[19px] space-x-2 px-4 py-3 md:px-5 md:py-2 bg-secondarygreen md:bg-primarygreen hover:scale-105 rounded-lg transition-all duration-300 text-white cursor-pointer mx-auto md:mx-0"
            >
                <div>Start Scanning</div>
                <Camera size={28} strokeWidth={1.75}/>
            </button>
        </div>

        {/* Image Container */}
        <div className='w-full md:flex-1 flex justify-center mt-8 md:mt-0'>
            <img src={nutritionLabelImage} alt="Nutrition label example" className="rounded-2xl rotate-2 w-[320px] md:w-[600px]" 
            style={{filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.75))'}}/>
        </div>
    </div>
  )
}

export default Hero