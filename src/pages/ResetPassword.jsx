import React from 'react'
import '../index.css'
import { useState } from 'react'
import { useAuthStore } from '../store/authStore';
import { Lock, Loader, EyeOff, Eye} from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); 

    const { resetPassword, error, isLoading, message} = useAuthStore(); 

    const { token } = useParams(); 
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {

    }

    return (
        <div className='min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8 font-inter text-white relative'>
            <div className='w-full max-w-md space-y-4 mt-6'>
                <h1 className='text-xl sm:text-2xl font-semibold'>Reset Password</h1>

                <form onSubmit={handleSubmit} className='space-y-6'>
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter new password"
                            value={password}
                            required
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

                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm new password"
                            value={confirmPassword}
                            required
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full pl-10 pr-12 py-2 border border-gray-600 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-lightgreen focus:border-transparent placeholder-gray-400"
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                        >
                            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-primarygreen text-white py-2 rounded-lg hover:bg-secondarygreen transition-colors font-medium text-md cursor-pointer"
                    >
                        {isLoading ? <Loader className='w-6 h-6 mx-auto animate-spin'/> : "Set New Password"}
                    </button>
                </form>
            </div>
        </div> 
  )
}

export default ResetPassword