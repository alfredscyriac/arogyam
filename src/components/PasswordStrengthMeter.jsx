import { Check, X } from 'lucide-react';
import React from 'react'
import '../index.css'

const PasswordCriteria = ({password}) => {
    const criteria = [
		{ label: "Contains at least 6 characters", met: password.length >= 6 },
		{ label: "Contains uppercase letter(s)", met: /[A-Z]/.test(password) },
		{ label: "Contains lowercase letter(s)", met: /[a-z]/.test(password) },
		{ label: "Contains number(s)", met: /\d/.test(password) },
		{ label: "Contains special character(s)", met: /[^A-Za-z0-9]/.test(password) },
	];

    return (
        <div className='mt-2 space-y-1'>
            {criteria.map((item) => (
                <div key={item.label} className='flex items-center text-xs'>
                    {item.met ? ( <Check className='size-4 text-lightgreen mr-2'/>
                    ) : (
                        <X className='size-4 text-gray-500 mr-2'/>
                    )}
                    <span className={item.met ? 'text-lightgreen' : 'text-gray-500'}>{item.label}</span>
                </div>
            ))}
        </div>
    )
}

const PasswordStrengthMeter = ({password}) => {
    const getStrength = (pass) => {
		let strength = 0;
		if (pass.length >= 6) strength++;
		if (pass.match(/[a-z]/) && pass.match(/[A-Z]/)) strength++;
		if (pass.match(/\d/)) strength++;
		if (pass.match(/[^a-zA-Z\d]/)) strength++;
		return strength;
	};

    const strength = getStrength(password);

	const getColor = (strength) => {
		if (strength === 0) return "bg-lightgreen";
		if (strength === 1) return "bg-lightgreen";
		if (strength === 2) return "bg-lightgreen";
		if (strength === 3) return "bg-lightgreen";
		return "bg-lightgreen";
	};

	const getStrengthText = (strength) => {
		if (strength === 0) return "Very Weak";
		if (strength === 1) return "Weak";
		if (strength === 2) return "Fairly Strong";
		if (strength === 3) return "Strong";
		return "Very Strong";
	};
    return (
        <div className='mt-1'>
            <div className='flex justify-between items-center mb-2'>
                <span className='text-xs text-gray-300'>Password strength</span>
                <span className='text-xs text-gray-300'>{getStrengthText(strength)}</span>
            </div>
            
            <div className='flex space-x-1'>
				{[...Array(4)].map((_, index) => (
					<div
						key={index}
						className={`h-1 w-1/4 transition-colors duration-300 
                            ${index < strength ? getColor(strength) : "bg-gray-600"}
                        `}
					/>
				))}
			</div>
			<PasswordCriteria password={password} />
        </div>
    )
}

export default PasswordStrengthMeter; 