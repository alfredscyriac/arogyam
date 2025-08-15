import React from 'react'
import '../index.css'
import { useAuthStore } from '../store/authStore';

const DashboardGreeting = () => {
    const getTimeBasedGreeting = () => {
        const hour = new Date().getHours()
        if(hour < 12) return 'Good morning'
        if(hour < 18) return 'Good afternoon'
        return 'Good evening'
    };

    const { user } = useAuthStore(); 
    return (
        <div className='mb-6 font-inter text-white'>
            <h1 className='text-3xl font-bold'>
                {getTimeBasedGreeting()},{' '}
                <span className='bg-primarygreen px-1 py-1'>{user.name}</span>
            </h1>
            <p className='font-light mt-2'>Welcome to your dashboard!</p>
        </div>
  )
}

export default DashboardGreeting