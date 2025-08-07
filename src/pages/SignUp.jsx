import React from 'react'
import { useState } from 'react';
import '../index.css'
import logo from '../assets/arogyamlogo.png'
import googlelogo from '../assets/Googlelogo.webp'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [agreedToTerms, setAgreedToTerms] = useState(false); 
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/')
    }

    return (
        <div className='min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8 font-inter text-white relative'>
            <button 
                onClick={handleLogoClick} 
                className='absolute top-6 left-10 cursor-pointer'
            >
                <img src={logo} alt="Arogyam Logo" className='h-11'/>
            </button>

            <div className='w-full max-w-md space-y-4 mt-6'>
                <div className='text-left space-y-4'>
                    <h1 className='text-xl sm:text-2xl font-semibold'>Get started with Arogyam</h1>
                    <p className='text-sm sm:text-base text-gray-300 font-light leading-relaxed'>
                        You are one step closer to unlocking ingredient transparency.
                    </p>
                </div>

                <form className='space-y-6'>
                    <div className='space-y-4'>
                        <label className='block text-sm font-light'>Email</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full pl-10 pr-4 py-2 border border-gray-600 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-lightgreen focus:border-transparent placeholder-gray-400"
                            />
                        </div>
                    </div>

                    <div className='space-y-4'>
                        <label className='block text-sm font-light'>Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                className="w-full pl-10 pr-12 py-2 border border-gray-600 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-lightgreen focus:border-transparent placeholder-gray-400"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <input 
                        id="termscheckbox" 
                        type="checkbox" 
                        checked={agreedToTerms} 
                        onChange={() => setAgreedToTerms(!agreedToTerms)} 
                        className='w-4 h-4 bg-gray-100 border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-lightgreen focus:border-transparent '/>
                        <label htmlFor="termscheckbox" className='ml-2 font-light text-sm'>
                            I agree to the{' '}
                            <Link to='/termsofservice' target="_blank" className='nav-text font-medium'>Terms of Service</Link>{' '}and{' '}<Link target="_blank" to='/privacypolicy' className='font-medium nav-text'>Privacy Policy</Link>
                        </label>
                    </div>

                    <button
                        type="submit" disabled={!agreedToTerms}
                        className={`w-full py-2 rounded-lg font-medium text-md ${
                            agreedToTerms 
                            ? " bg-primarygreen hover:bg-secondarygreen transition-colors text-white cursor-pointer" 
                            : "bg-gray-600 text-gray-400 cursor-not-allowed"
                        }`}
                    >
                        Sign Up
                    </button>

                    <div className="relative flex items-center ">
                        <div className="flex-grow border-t border-gray-600"></div>
                        <span className="px-4 text-gray-400 text-sm">OR</span>
                        <div className="flex-grow border-t border-gray-600"></div>
                    </div>

                    <button
                        type="button" disabled={!agreedToTerms}
                        className={`w-full py-2 rounded-lg font-medium text-md border border-gray-600 flex items-center justify-center space-x-3 ${
                            agreedToTerms
                            ? "bg-blue-500 hover:bg-blue-600 transition-colors text-white cursor-pointer"
                            : "bg-gray-600 text-gray-400 cursor-not-allowed"
                        }`}
                    >
                        <img src={googlelogo} alt="Google" className="h-4 w-4 filter brightness-0 invert" />
                        <span>Sign up with Google</span>
                    </button>

                    <div className="text-center pt-4">
                        <p className="text-gray-400 text-sm">
                            Already have an account?{' '}
                            <button 
                                type="button"
                                onClick={() => navigate('/signin')}
                                className="text-white nav-text font-medium"
                            >
                                Sign In
                            </button>
                        </p>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default SignUp