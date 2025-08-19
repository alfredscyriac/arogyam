import React, { useState } from 'react'
import { Camera, Upload, Loader } from 'lucide-react'
import { QrReader } from 'react-qr-barcode-scanner'; 
import { toast } from 'react-hot-toast';

const ProductScanner = () => {
    const [isScanning, setIsScanning] = useState(false); 
    const [scannedData, setScannedData] = useState(null); 

    const handleStartScan = () => {
        setIsScanning(true); 
        setScannedData(null); 
    };

    const handleStopScan = () => {
        setIsScanning(false); 
    }; 

    const handleScanResult = () => {
        if (result) {
            setScannedData(result.text); 
            setIsScanning(false); 
            console.log('Scanned barcode:', result.text); 
        }
    };

    const handleScanError = (error) => {
        console.error('Scanner error', error); 
        setIsScanning(false); 
    };

    return (
    <div className='bg-white rounded-lg shadow-md p-6 mb-8'>
        <h2 className='text-xl font-semibold mb-4'>Scan Product</h2>
        <div className='flex flex-col md:flex-row gap-6'>
            <div className='w-full md:w-1/2 flex flex-col items-center'>
                <div
                    className={`w-full aspect-video bg-gray-900 rounded-lg flex items-center justify-center ${isScanning ? ' animate-pulse': ''}`}
                >
                    {isScanning ? (
                        <Loader className='text-white animate-spin mx-auto' size={64}/>
                    ) : (
                        <Camera className='text-gray-400' size={64}/>
                    )}
                </div>
                <button
                    disabled={isScanning}
                    className={`mt-4 px-6 py-3 rounded-lg flex items-center justify-center w-full ${isScanning ? 'bg-gray-400 cursor-not-allowed' : 'bg-primarygreen hover:bg-secondarygreen transition-colors duration-200 text-white cursor-pointer'}`}    
                >
                    <Camera className='mr-2' size={20} strokeWidth={1.5}/>
                    { isScanning ? "Scanning..." : "Scan Product" }
                </button>
            </div>
            <div className="w-full md:w-1/2 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-6">
                <Upload className="text-gray-400 mb-2" size={48} />
                <p className="text-gray-600 text-center mb-2">
                Or upload a product image
                </p>
                <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 transition-colors duration-200 rounded-lg text-gray-700 cursor-pointer">
                Choose File
                </button>
            </div>
        </div>
    </div>
  )
}

export default ProductScanner