import React from 'react'
import '../index.css'
import { ShieldAlert, ShieldCheck, Loader2 } from 'lucide-react'

const SafetyScore = ({ analysis, isAnalyzing, productScanned }) => {
  if(!productScanned && !isAnalyzing) {
    return (
      <div className='bg-white rounded-lg shadow-md p-6 font-inter flex flex-col min-h-[300px]'>
        <h2 className='text-xl font-semibold mb-4'>Safety Score</h2>
        <div className='flex flex-col items-center justify-center flex-grow text-gray-400'>
          <ShieldCheck size={64} className='mb-4'/>
          <p className='text-center text-gray-500'>Scan a product to view its safety score</p>
        </div>
      </div>
    );
  }

  if(isAnalyzing) {
    return(
      <div className='bg-white rounded-lg shadow-md p-6 font-inter flex flex-col min-h-[300px]'>
        <h2 className='text-xl font-semibold mb-4'>Safety Score</h2>
        <div className='flex flex-col items-center justify-center flex-grow space-y-5'>
          <Loader2 size={70} className='animate-spin text-primarygreen'/>
          <p className='text-gray-600'>Analyzing ingredients...</p>
        </div>
      </div>
    );
  }

  if(analysis) {
    const { safetyScore, isSafe, explanation, matchedIngredients, confidence } = analysis; 

    const getScoreColor = (score) => {
      if (score >= 80) return 'text-green-600'; 
      if (score >= 50) return 'text-yellow-600'; 
      return 'text-red-600';
    }; 

    const getScoreBg = (score) => {
      if (score >= 80) return 'bg-green-100';
      if (score >= 50) return 'bg-yellow-100';
      return 'bg-red-100';
    }; 

    return (
      <div className='bg-white rounded-lg shadow-md p-6 font-inter flex flex-col min-h-[500px]'>
        <h2 className='text-xl font-semibold mb-4'>Safety Score</h2>

        <div className='flex justify-center mb-6'>
          <div className={`relative w-24 h-24 rounded-full ${getScoreBg(safetyScore)} flex items-center justify-center`}>
            { isSafe ? (
              <ShieldCheck size={48} className='text-green-600'/>
            ) : (
              <ShieldAlert size={48} className='text-red-600' />
            )}
            <div className='absolute -bottom-2 bg-white px-3 py-1 rounded-full shadow-md'>
              <span className={`text-lg font-bold ${getScoreColor(safetyScore)}`}>
                {safetyScore}
              </span>
              <span className='text-gray-500 text-sm'>/100</span>
            </div>
          </div>
        </div>

        <div className='flex justify-center mb-4'>
          <span className={`px-4 py-1 rounded-full text-xs font-medium 
            ${isSafe ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {isSafe ? 'Safe to consume' : 'Contains harmful ingredients' }
          </span>
        </div>

        <div className='mb-3'>
          <h3 className='font-semibold text-gray-700 mb-1'>Analysis</h3>
          <p className='text-gray-600 text-sm leading-relaxed'>{explanation}</p>
        </div>

        { matchedIngredients && matchedIngredients.length > 0 && (
          <div className='mb-3'>
            <h3 className='font-semibold text-gray-700 mb-2'>Flagged Ingredients</h3>
            <div className='flex flex-wrap gap-2'>
              {matchedIngredients.map((ingredient, index) => (
                <span
                  key={index}
                  className='px-3 py-1 bg-red-50 text-red-700 text-xs rounded-full border border-red-200'
                >
                  {ingredient}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className='flex items-center justify-between text-xs text-gray-500'>
          <span>Confidence Level:</span>
          <span className={`font-medium text-xs ${confidence === 'high' ? 'text-green-600' : confidence === 'medium' ? 'text-yellow-600' : 'text-gray-600'}`}>
            {confidence?.toUpperCase()}
          </span>
        </div>

        {!isSafe && (
          <button className='font-medium w-full mt-4 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-200 cursor-pointer'>
            Save to Watchlist
          </button>
        )}

      </div>
    );
  }

  return null;
};

export default SafetyScore