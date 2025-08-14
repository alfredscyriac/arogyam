import React from 'react'
import '../index.css'
import { useState } from 'react'
import { useAuthStore } from '../store/authStore';
import { Mail, Loader } from 'lucide-react';

const ForgotPassword = () => {
    const [email, setEmail] = useState(""); 
    const [isSubmitted, setIsSubmitted] = useState(false); 

    const { isLoading, forgotPassword } = useAuthStore(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await forgotPassword(email); 
            setIsSubmitted(true); 
        } catch (error) {
            console.log("Error in forgot password:", error);
        }
    };

    return (
    <div className='min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8 font-inter text-white relative'>
        <div className='w-full max-w-md space-y-4'>
            <h1 className='text-xl sm:text-2xl font-semibold'>Forgot Password?</h1>

            {!isSubmitted ? (
                <form onSubmit={handleSubmit} className='space-y-6'>
                    <p className='text-sm sm:text-base text-gray-300 font-light leading-relaxed'>
                        Enter the email associated to your account and we'll send you a link to reset your password.
                    </p>
                    <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full pl-10 pr-4 py-2 border border-gray-600 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-lightgreen focus:border-transparent placeholder-gray-400"
                            />
                    </div>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-primarygreen text-white py-2 rounded-lg hover:bg-secondarygreen transition-colors font-medium text-md cursor-pointer"
                    >
                        {isLoading ? <Loader className='w-6 h-6 mx-auto animate-spin'/> : "Send Reset Link"}
                    </button>
                </form>
            ) : (
                <div className='space-y-6'> 
                    <div className='w-16 h-16 bg-primarygreen rounded-full flex items-center justify-center mx-auto'>
                        <Mail className='h-8 w-8 text-white'/>
                    </div>
                    <p className='text-sm sm:text-base text-gray-300 font-light leading-relaxed'>
                        If an account exists for {email}, you will recieve a password reset link shortly.
                    </p>
                </div>
            )}
        </div>
    </div>
  )
}

export default ForgotPassword