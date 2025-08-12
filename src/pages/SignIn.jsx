import React from 'react'
import { useState } from 'react';
import '../index.css'
import logo from '../assets/arogyamlogo.png'
import googlelogo from '../assets/Googlelogo.webp'
import { Mail, Lock, Eye, EyeOff, Loader } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");
    
    const isLoading = false;
    
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/')
    }

    const handleSignIn = (e) => {
        e.preventDefault();
    }

    return (
        <div className='min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8 font-inter text-white relative'>
            {/* Logo */}
            <button 
                onClick={handleLogoClick} 
                className='absolute top-6 left-10 cursor-pointer'
            >
                <img src={logo} alt="Arogyam Logo" className='h-11'/>
            </button>

            { /* Form + title + description container */}
            <div className='w-full max-w-md space-y-4 mt-6'>
                <div className='text-left space-y-4'>
                    <h1 className='text-xl sm:text-2xl font-semibold'>Welcome to Arogyam</h1>
                    <p className='text-sm sm:text-base text-gray-300 font-light leading-relaxed'>
                        Sign in to access your dashboard and continue taking control of your health.
                    </p>
                </div>

                <form onSubmit={handleSignIn} className='space-y-6'>
                    <div className='space-y-4'>
                        <label className='block text-sm font-light'>Email</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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

                    <div className='text-right text-sm'>
                        <button 
                                type="button"
                                onClick={() => navigate('/forgotpassword')}
                                className="text-white hover:text-lightgreen duration-200 cursor-pointer"
                        >
                            Forgot your password?
                        </button>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-primarygreen text-white py-2 rounded-lg hover:bg-secondarygreen transition-colors font-medium text-md cursor-pointer"
                    >
                        {isLoading ? <Loader className='w-6 h-6 mx-auto animate-spin'/> : "Sign In"}
                    </button>

                    <div className="relative flex items-center ">
                        <div className="flex-grow border-t border-gray-600"></div>
                        <span className="px-4 text-gray-400 text-sm">OR</span>
                        <div className="flex-grow border-t border-gray-600"></div>
                    </div>

                    <button
                        type="button"
                        className="w-full bg-blue-500 hover:bg-blue-600 transition-colors text-white py-2 rounded-lg font-medium text-md border border-gray-600 flex items-center justify-center space-x-3 cursor-pointer"
                    >
                        <img src={googlelogo} alt="Google" className="h-4 w-4 filter brightness-0 invert" />
                        <span>Continue with Google</span>
                    </button>

                    <div className="text-center pt-4">
                        <p className="text-gray-400 text-sm">
                            Not using Arogyam yet?{' '}
                            <button 
                                type="button"
                                onClick={() => navigate('/signup')}
                                className="text-white nav-text font-medium"
                            >
                                Create an account now
                            </button>
                        </p>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default SignIn