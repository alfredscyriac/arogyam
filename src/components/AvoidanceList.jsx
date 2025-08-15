import React from 'react'
import { Plus, X, AlertCircle} from 'lucide-react'

const AvoidanceList = () => {
    return (
        <div className='bg-white rounded-lg shadow-md p-6 mb-8 font-inter'>
            <div className='flex items-center mb-2'>
                <AlertCircle className='text-red-500 mr-2' size={20} strokeWidth={2.25}/>
                <h2 className='text-xl font-semibold'>Your Avoidance List</h2>
            </div>
            <p className='text-gray-600 mb-4 font-light'>Add ingredients you want to avoid in your products</p>
            <div className='flex mb-4'>
                <input 
                    type="text"
                    placeholder='Enter ingredient to avoid'
                    className='flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-primarygreen' 
                />
                <button className='bg-primarygreen hover:bg-secondarygreen transition-colors duration-300 text-white px-4 py-2 rounded-r-lg flex items-center'>
                    <Plus size={20}/>
                </button>
            </div>
            <div className='mt-4'>
                <h3 className="text-sm text-gray-700 mb-2">
                    Recently Added:
                </h3>
                <p className="text-gray-500 italic">No ingredients added yet</p>


            </div>

        </div>
    ) 
}

export default AvoidanceList