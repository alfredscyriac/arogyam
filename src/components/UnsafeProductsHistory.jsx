import React, { useEffect } from 'react'; 
import { Trash2, AlertTriangle } from 'lucide-react';
import { useWatchlistStore } from '../store/watchlistStore';

const UnsafeProductsHistory = () => {
    const { unsafeProducts, isLoading, fetchWatchlist, removeFromWatchlist } = useWatchlistStore();

    useEffect(() => {
        fetchWatchlist();
    }, [fetchWatchlist]);

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    if (isLoading) {
        return (
            <div className='bg-white rounded-lg shadow-md p-6 font-inter'>
                <h2 className='text-xl font-semibold mb-4'>Watchlist</h2>
                <p className='text-gray-500 text-center py-8'>Loading...</p>
            </div>
        );
    }

    if (!unsafeProducts || unsafeProducts.length === 0) {
        return (
            <div className='bg-white rounded-lg shadow-md p-6 font-inter'>
                <h2 className='text-xl font-semibold mb-4'>Watchlist</h2>
                <div className='flex flex-col items-center justify-center py-8 text-gray-400'>
                    <AlertTriangle size={64} className='mb-4' />
                    <p className='text-center text-gray-500'>Scan an unsafe product to add it to the watchlist</p>
                </div>
            </div>
        );
    }

    return (
        <div className='bg-white rounded-lg shadow-md p-6 font-inter'>
            <h2 className='text-xl font-semibold mb-4'>Watchlist ({unsafeProducts.length})</h2>

            <div className='space-y-4'>
                {unsafeProducts.map((product, index) => (
                    <div 
                        key={index} 
                        className='border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200'
                    >
                        <div className='flex gap-4'>
                            {/* Product Image */}
                            <div className='flex-shrink-0'>
                                {product.imageUrl ? (
                                    <img 
                                        src={product.imageUrl} 
                                        alt={product.productName}
                                        className='w-20 h-20 object-cover rounded-md border border-gray-200'
                                    />
                                ) : (
                                      <div className='w-20 h-20 bg-gray-100 rounded-md flex items-center justify-center'>
                                        <AlertTriangle size={32} className='text-gray-400' />
                                      </div>
                                )}
                            </div>

                            {/* Product Info */}
                            <div className='flex-grow'>
                                <div className='flex justify-between items-start mb-2'>
                                    <h3 className='font-semibold text-gray-800'>{product.productName}</h3>
                                    <button
                                        onClick={() => removeFromWatchlist(product.barcode)}
                                        className='text-red-500 hover:text-red-700 transition-colors duration-200'
                                        title='Remove from watchlist'
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>

                                <p className='text-xs text-gray-500 mb-2'>
                                    Scanned on {formatDate(product.scannedAt)}
                                </p>

                                {/* Safety Score */}
                                <div className='mb-2'>
                                    <span className='text-xs font-medium text-gray-600'>Safety Score:</span>
                                    <span className={`text-xs font-bold ${
                                        product.safetyScore >= 50 ? 'text-yellow-600' : 'text-red-600'
                                    }`}>
                                        {product.safetyScore}/100
                                    </span>
                                </div>

                                {/* Flagged Ingredients */}
                                {product.matchedIngredients && product.matchedIngredients.length > 0 && (
                                    <div>
                                        <p className='text-xs font-medium text-gray-600 mb-1'>Flagged for:</p>
                                        <div className='flex flex-wrap gap-1'>
                                            {product.matchedIngredients.map((ingredient, idx) => (
                                                <span
                                                    key={idx}
                                                    className='px-2 py-1 bg-red-50 text-red-700 text-xs rounded-full border border-red-200'
                                                >
                                                    {ingredient}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UnsafeProductsHistory;
