import React, { useState } from 'react'
import { Camera, SquarePen, Plus } from 'lucide-react'
import BarcodeScanner from "react-qr-barcode-scanner"
import { toast } from 'react-hot-toast'

const ProductScanner = () => {
    const [isScanning, setIsScanning] = useState(false);
    const [scannedData, setScannedData] = useState(null);

    const [manualBarcode, setManualBarcode] = useState(''); 
    const [activeMethod, setActiveMethod] = useState(null)

    const handleStartScan = () => {
        setIsScanning(true);
        setScannedData(null);
    };

    const handleStopScan = () => {
        setIsScanning(false);
    };

    const handleScanUpdate = (err, result) => {
        if (err) {
            console.error('Scan error:', err);
            if (err.name === "NotAllowedError") {
                toast.error('Camera access denied');
                setIsScanning(false);
            }
            return;
        }
        
        if (result) {
            setScannedData(result.text);
            setIsScanning(false);
            console.log('Scanned barcode:', result.text);
        }
    };

    const handleManualSubmit = () => {
        const trimmedBarcode = manualBarcode.trim(); 

        if(!trimmedBarcode) {
            toast.error("Enter a barcode");
            return; 
        }

        if(trimmedBarcode.length < 8) {
            toast.error("Barcode too short");
            return; 
        }

        setScannedData(trimmedBarcode); 
        setActiveMethod('manual'); 
        console.log('Manual barcode: ', trimmedBarcode); 
    };

    const handleClearAll = () => {
        setScannedData(null); 
        setManualBarcode('');
        setActiveMethod(null); 
        setIsScanning(false); 
    }; 

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleManualSubmit();
        }
    };

    return (
        <div className='bg-white rounded-lg shadow-md p-6 mb-8 font-inter'>
            <h2 className='text-xl font-semibold mb-4'>Scan Product</h2>
            <div className='flex flex-col md:flex-row gap-6'>
                <div className='w-full md:w-1/2 flex flex-col items-center'>
                    <div className='w-full aspect-video bg-gray-900 rounded-lg flex items-center justify-center relative overflow-hidden'>
                        {isScanning ? (
                            <>
                                <BarcodeScanner
                                    width="100%"
                                    height="100%"
                                    onUpdate={handleScanUpdate}
                                    facingMode="environment"
                                    delay={300}
                                />
                            </>
                        ) : scannedData ? (
                            <div className='text-center p-4'>
                                <div className='text-white text-sm mb-2'>Scanned Barcode:</div>
                                <div className='text-primarygreen font-mono text-lg break-all'>{scannedData}</div>
                            </div>
                        ) : (
                            <Camera className='text-gray-400' size={64}/>
                        )}
                    </div>
                    
                    {scannedData && (
                        <button
                            className='mt-2 text-center text-white py-2 w-full flex items-center justify-center rounded-lg  bg-red-500 hover:bg-red-600 transition-colors duration-200 cursor-pointer'
                            onClick={() => setScannedData(null)}
                        >
                            Clear result
                        </button>

                    )}

                    <button
                        onClick={isScanning ? handleStopScan : handleStartScan}
                        disabled={false}
                        className={`mt-4 px-6 py-3 rounded-lg flex items-center justify-center w-full transition-colors duration-200 ${
                            isScanning 
                            ? 'bg-red-500 hover:bg-red-600 text-white cursor-pointer' 
                            : 'bg-primarygreen hover:bg-secondarygreen text-white cursor-pointer'
                        }`}
                    >
                        <Camera className='mr-2' size={20} strokeWidth={1.5}/>
                        {isScanning ? "Stop Scanning" : "Scan Product"}
                    </button>
                </div>
                
                <div className="w-full md:w-1/2 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-6 space-y-4">
                    <SquarePen className="text-gray-400" size={42}/>
                    <p className="text-gray-600 text-center">
                        Or manually enter barcode
                    </p>
                    <div className='flex justify-center max-w-3/4'>
                        <input 
                            placeholder='Enter barcode'
                            className='flex-grow px-3 py-2 border border-gray-300 rounded-l-lg disabled:bg-gray-100' 
                        />
                        <button
                            className='px-3 py-2 rounded-r-lg flex items-center transition-colors duration-300 bg-primarygreen hover:bg-secondarygreen text-white cursor-pointer' 
                        >
                            <Plus size={20}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductScanner