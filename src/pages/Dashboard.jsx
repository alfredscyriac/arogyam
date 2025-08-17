import React from 'react'
import '../index.css'
import DashboardGreeting from '../components/DashboardGreeting'
import AvoidanceList from '../components/AvoidanceList'
import ProductScanner from '../components/ProductScanner'

const Dashboard = () => {
  return (
    <div className='w-full flex flex-col min-h-screen font-inter bg-darkazure bg-full '>
      <main className='flex-grow w-full'>
        <div className='container mx-auto px-4 py-8'>
          <DashboardGreeting/>
          <div className='grid grid-cols-1 gap-8'>
            <AvoidanceList/>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <ProductScanner/>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard