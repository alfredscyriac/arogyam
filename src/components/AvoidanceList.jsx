import React, { useState, useEffect } from 'react'
import '../index.css'
import { Plus, X, AlertCircle} from 'lucide-react'
import { useDashboardStore } from '../store/dashboardStore'
import { toast } from 'react-hot-toast';

const AvoidanceList = () => {
    const { avoidanceList, isLoading, error, fetchAvoidanceList, addIngredient, removeIngredient } = useDashboardStore(); 
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        fetchAvoidanceList();
    }, [fetchAvoidanceList]);

    const handleAddIngredient = async(e) => {
        e.preventDefault();
        const trimmedInput = inputValue.trim();

        if (!trimmedInput) {
            toast.error("Please enter an ingredient");
            return;
        }

        const isDuplicate = avoidanceList.some(
            ingredient => ingredient.toLowerCase() === trimmedInput.toLowerCase()
        );
        
        if (isDuplicate) {
            toast.error("Duplicate ingredient");
            return;
        }


        try {
            await addIngredient(trimmedInput); 
            setInputValue(''); 
            toast.success("Ingredient added successfully"); 
        } catch (error) {
            toast.error("Failed to add ingredient");
        }
    }; 

    const handleRemoveIngredient = async (ingredientToRemove) => {  
        try {
            await removeIngredient(ingredientToRemove); 
            toast.success("Ingredient removed successfully");
        } catch (error) {
            toast.error("Failed to remove ingredient");
        }
    }; 

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddIngredient(e); 
        }
    };

    if (isLoading && avoidanceList.length === 0) {
        return (
            <div className='bg-white rounded-lg shadow-md p-6 mb-8 font-inter'>
                <p className="text-gray-500">Loading your avoidance list...</p>
            </div>
        );
    }

    return (
        <div className='bg-white rounded-lg shadow-md p-6 mb-8 font-inter'>
            <div className='flex items-center mb-2'>
                <AlertCircle className='text-red-700 mr-2' size={20} strokeWidth={2.25}/>
                <h2 className='text-xl font-semibold'>Your Avoidance List</h2>
            </div>
            <p className='text-gray-600 mb-4 font-light'>Add ingredients you want to avoid in your products</p>
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    {error}
                </div>
            )}
            <div className='flex mb-4'>
                <input 
                    disabled={isLoading}
                    type="text"
                    placeholder='Enter ingredient to avoid'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className='flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-primarygreen focus:border-primarygreen disabled:bg-gray-100' 
                />
                <button
                    onClick={handleAddIngredient}
                    disabled={!inputValue.trim() || isLoading}  
                    className={`px-4 py-2 rounded-r-lg flex items-center transition-colors duration-300 ${
                                inputValue.trim() && !isLoading
                                ? 'bg-primarygreen hover:bg-secondarygreen text-white cursor-pointer' 
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`} 
                >
                    <Plus size={20}/>
                </button>
            </div>
            <div className='mt-4'>
                <h3 className="text-sm text-gray-700 mb-2">
                    Recently Added:
                </h3>
                {avoidanceList.length === 0 ? (
                    <p className="text-gray-500 italic">No ingredients added yet</p>
                ) : (
                    <div className="flex flex-wrap gap-2">
                        {avoidanceList.map((ingredient, index) => (
                            <div 
                                key={index}
                                className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm flex items-center gap-2 border border-red-200"
                            >
                                <span>{ingredient}</span>
                                <button
                                    onClick={() => handleRemoveIngredient(ingredient)}
                                    disabled={isLoading}
                                    className="hover:text-red-600 transition-colors duration-200 disabled:opacity-50"
                                    aria-label={`Remove ${ingredient}`}
                                >
                                    <X size={14} strokeWidth={2}/>
                                </button>
                            </div>
                        ))}
                    </div>
                )}
                
                {avoidanceList.length > 0 && (
                    <p className="text-xs text-gray-500 mt-2">
                        {avoidanceList.length} ingredient{avoidanceList.length !== 1 ? 's' : ''} to avoid
                    </p>
                )}
            </div>

        </div>
    ) 
}

export default AvoidanceList