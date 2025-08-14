import React from 'react'
import '../index.css'
import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import toast from 'react-hot-toast';

const EmailVerificationPage = () => {
    const [code, setCode] = useState(["", "", "", "", "", ""]); 
    const inputRefs = useRef([])
    const navigate = useNavigate();

    const {error, isLoading, verifyEmail} = useAuthStore(); 

    const handleChange = (index, value) => {
        const newCode = [...code];

		if (value.length > 1) {
			const pastedCode = value.slice(0, 6).split("");
			for (let i = 0; i < 6; i++) {
				newCode[i] = pastedCode[i] || "";
			}
			setCode(newCode);

			const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
			const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
			inputRefs.current[focusIndex].focus();
		} else {
			newCode[index] = value;
			setCode(newCode);

			if (value && index < 5) {
				inputRefs.current[index + 1].focus();
			}
		}
    }

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
			inputRefs.current[index - 1].focus();
		}
    }

    const handleSubmit = async(e) => {
        e.preventDefault(); 
        const verificationCode = code.join(""); 
        try {
            await verifyEmail(verificationCode); 
            navigate('/'); 
            toast.success("Email verified successfully")
        } catch (error) {
            console.log(error); 
        }
    }

    useEffect(() => {
		if (code.every((digit) => digit !== "")) {
			handleSubmit({ preventDefault: () => {} });
		}
	}, [code]);

    return (
    <div className='min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8 font-inter text-white relative'>
        <div className='w-full max-w-md space-y-6'>
            <h1 className='text-center text-xl sm:text-2xl font-semibold'>Verify Your Email</h1>
            <p className='text-center text-sm sm:text-base text-gray-300 font-light leading-relaxed'>
                Enter the 6-digit code sent to your email address.
            </p>

            <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='flex justify-between'>
                    {code.map((digit, index) => (
						<input
							key={index}
							ref={(el) => (inputRefs.current[index] = el)}
							type='text'
							maxLength='6'
							value={digit}
							onChange={(e) => handleChange(index, e.target.value)}
							onKeyDown={(e) => handleKeyDown(index, e)}
							className='w-12 h-12 text-center text-2xl font-bold bg-gray-700 text-white border-2 border-gray-600 rounded-lg focus:border-lightgreen focus:outline-none'
						/>
					))}
                </div>
                {error && <p className='text-red-400 mt-2'>{error}</p>}
                <button
                    type='submit'
                    disabled={isLoading || code.some((digit) => !digit)}
                    className='w-full bg-primarygreen text-white py-2 rounded-lg hover:bg-secondarygreen transition-colors font-medium text-md cursor-pointer'
                >
                    { isLoading ? "Verifying...": "Verify Email" }
                </button>
            </form>
        </div>
    </div>
  )
}

export default EmailVerificationPage