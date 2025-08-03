import React from 'react'
import '../index.css'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const Faq = () => {
    const questions = [
        {
            id: 1,
            question: "What products can I scan?",
            answer: "You can scan any product with a barcode whether that be food, cosmetics, medications, supplemenets, or household products. Our database includes millions of products from major retailers and is constantly growing"
        }, 
        {
            id: 2, 
            question: "How accurate is the ingredient matching?",
            answer: "Our AI identifies ingredient variations with high confidence, but we always recommend consulting your healthcare provider for medical decisions. We're a tool to help you spot potential issues, not replace medical advice."
        },
        {
            id: 3,
            question: "Is this service considered medical advice?",
            answer: "No. Arogyam is an ingredient identification tool, not medical advice. While we strive for accuracy with our software, no system is perfect. Always read labels yourself and consult your doctor about ingredients you're unsure about. We want our users to utilize Arogyam as an additional safety tool, not your only one. Always consult your healthcare professional for medical decisions and follow their guidance."
        },
        {
            id: 4, 
            question: "What if a product isn't found when I scan it?", 
            answer: "We're constantly updating our database. If a product is not found, we will try our best to add that product to our database as soon as possible."
        },
        {
            id: 5, 
            question: "Can I add custom ingredients to avoid?", 
            answer:"Absolutely! You can add any ingredient or chemical compound to your avoidance list, whether it's a common allergen or something specific to your condition(s)."
        },
        {
            id: 6,
            question: "Is Arogyam free to use?",
            answer: "Absolutely! It is 100% free of charge to create your account and start scanning. However, this service is rate limited -- every day we only have a certain capacity of scans that will be allowed. Arogyam is currently in a stage we would like to refer to as 'demo.' As of today this product brings in profit, thus we are able to invest back into the product to match supply with demand."
        }
    ]
    const [activeQuestion, setActiveQuestion] = useState(null); 
    return (
    <div className='w-full h-[101vh] flex items-center justify-center bg-darkazure'>
        <div className='container mx-auto px-6 md:px-12 lg:px-16 space-y-8'>
            <div className='text-center'>
                <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold text-white'>Frequenly Asked Questions</h1>
            </div>

            <div className='w-[90%] m-auto max-w-[1400px] rounded-lg shadow-md font-inter font-light'>
                {questions.map((q) => (
                    <div key={q.id} className='mb-4 last:mb-0'>
                        <button className=' text-white w-full text-left text-lg focus:outline-none p-4 bg-slate-700 rounded-lg shadow-md flex justify-between items-center'
                            onClick={()=> setActiveQuestion(activeQuestion === q.id ? null : q.id)}>
                                {q.question}
                                {activeQuestion === q.id ? (
                                    <ChevronUp/>
                                ) : <ChevronDown/> }
                        </button>
                        <AnimatePresence>
                            {activeQuestion === q.id && (
                                <motion.div initial={{opacity: 0, height: 0}} animate={{opacity: 1, height: "auto"}} exit={{opacity:0, height: 0}}
                                    className='mt-3 text-lightgreen ml-2'>
                                    <p>{q.answer}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}

            </div>

        </div>
    </div>
  )
}

export default Faq