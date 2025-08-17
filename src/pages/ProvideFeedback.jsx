import React, { useState } from 'react'
import { toast } from 'react-hot-toast';

const ProvideFeedback = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        try {
            setIsSubmitting(true); 
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then((res) => res.json());

            if (res.success) {
                toast.success("Feedback Received!"); 
                event.target.reset(); 
            } else {
                toast.error("Failed to send. Please try again.");
            }
        } catch (error) {
            toast.error("Error. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
    <div className='min-h-screen font-inter py-16 px-6 md:px-12'>
        <div className='max-w-4xl mx-auto text-white'>
            <div className='text-left mb-6'>
                <h1 className='text-4xl md:text-5xl font-semibold mb-4'>Provide Feedback</h1>
                <p className='text-lg font-light'>
                Your feedback shapes Arogyam's future. Tell us about your experience with the interface, features, accessibility, or 
                suggest improvements—every insight helps us build a better platform.
                </p>
            </div>

            <div className='prose prose-lg max-w-none text-white space-y-6'>
                <form className='space-y-6' onSubmit={onSubmit}>
                    <input 
                        type='text'
                        name='name'
                        required 
                        placeholder='Enter your name'
                        className='w-full px-4 py-3 border border-gray-100 bg-gray-200 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-lightgreen focus:border-transparent placeholder-gray-500'
                    />
                    <input 
                        type='email'
                        name='email'
                        required 
                        placeholder='Enter your email'
                        className='w-full px-4 py-3 border border-gray-100 bg-gray-200 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-lightgreen focus:border-transparent placeholder-gray-500'
                    />
                    <input 
                        type='text'
                        name='subject'
                        required 
                        placeholder='Enter email subject'
                        className='w-full px-4 py-3 border border-gray-100 bg-gray-200 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-lightgreen focus:border-transparent placeholder-gray-500'
                    />
                    <textarea
                        required 
                        name='message'
                        placeholder='Enter your feedback'
                        rows={5}
                        className='w-full px-4 py-3 border border-gray-100 bg-gray-200 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-lightgreen focus:border-transparent placeholder-gray-500'
                    />
                    <button
                        type='submit'
                        disabled={isSubmitting}
                        className={`${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-primarygreen hover:scale-105 cursor-pointer'} w-full border-1 border-gray-400 text-white py-3 rounded-lg transition-all duration-300 font-medium text-md`}
                    >
                        { isSubmitting ? "Sending..." : "Send Feedback!" }
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ProvideFeedback