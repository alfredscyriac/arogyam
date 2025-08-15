import React from 'react'
import '../index.css'
import DashboardGreeting from '../components/DashboardGreeting'
import AvoidanceList from '../components/AvoidanceList'

const Dashboard = () => {
  return (
    <div className='w-full flex flex-col min-h-screen font-inter bg-darkazure bg-full '>
      <main className='flex-grow w-full'>
        <div className='container mx-auto px-4 py-8'>
          <DashboardGreeting/>
          <div className='grid grid-cols-1 gap-8'>
            <AvoidanceList/>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard