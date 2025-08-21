import React, { useEffect, useState } from 'react'
import '../index.css'
import errorlogo from '../assets/arogyam404msg.png'
import { Link } from 'react-router-dom'
import { AlertTriangle, ArrowLeft, Pill, Scan, ShieldX } from 'lucide-react'

const NotFoundPage = () => {
    const [showIcons, setShowIcons] = useState(false);
    
    useEffect(() => {
        setTimeout(() => setShowIcons(true), 500);
    }, []);

    return (
        <div className='min-h-screen bg-black flex items-center justify-center px-4 relative overflow-hidden'>
            <div className="text-center max-w-md w-full space-y-4">
                <div>
                    <img 
                        src={errorlogo} 
                        alt="Arogyam 404 Error" 
                        className='h-48 mx-auto select-none'
                    />
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-white">
                    Ingredient Not Found
                </h1>

                <p className="text-green-300 text-lg">
                    The page you're looking for isn't in our formula.
                </p>

                <div className="bg-black/60 border border-green-500/30 rounded-lg p-6 mb-8 text-left">
                    <div className="flex items-center mb-3">
                        <AlertTriangle className="text-yellow-500 mr-2" size={20} />
                        <span className="text-yellow-400 font-medium">Safety Analysis</span>
                    </div>
                    
                    <p className="text-white text-sm mb-4">
                        Error Code: <span className="font-mono text-red-400">404_PAGE_NOT_FOUND</span>
                    </p>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="h-2 rounded-full bg-red-500 animate-pulse w-4/5"></div>
                    </div>
                </div>

                <Link
                    to="/"
                    className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full transition-all duration-300 font-medium"
                >
                    <ArrowLeft size={18} className="mr-2" />
                    Return to Home
                </Link>
            </div>

            {showIcons && (
                <>
                    <Pill
                        className="absolute text-green-400/50 animate-bounce"
                        style={{
                            top: '15%',
                            left: '15%',
                            animationDelay: '0s',
                            animationDuration: '3s'
                        }}
                        size={42}
                    />
                    
                    <ShieldX
                        className="absolute text-red-400/50 animate-bounce"
                        style={{
                            top: '20%',
                            right: '15%',
                            animationDelay: '1.5s',
                            animationDuration: '4s'
                        }}
                        size={50}
                    />
                    
                    <Scan
                        className="absolute text-yellow-400/50 animate-bounce"
                        style={{
                            bottom: '25%',
                            left: '10%',
                            animationDelay: '1s',
                            animationDuration: '3.5s'
                        }}
                        size={46}
                    />
                    
                    <AlertTriangle
                        className="absolute text-orange-400/50 animate-bounce"
                        style={{
                            bottom: '20%',
                            right: '20%',
                            animationDelay: '0.5s',
                            animationDuration: '4.5s'
                        }}
                        size={48}
                    />
                </>
            )}
        </div>
    )
}

export default NotFoundPage