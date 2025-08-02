import React from 'react'

const Faq = () => {
    const questions = [
        {
            question: "What products can I scan?",
            answer: "You can scan any product with a barcode whether that be food, cosmetics, medications, supplemenets, or household products. Our database includes millions of products from major retailers and is constantly growing"
        }, 
        {
            question: "How accurate is the ingredient matching?",
            answer: "Our AI identifies ingredient variations with high confidence, but we always recommend consulting your healthcare provider for medical decisions. We're a tool to help you spot potential issues, not replace medical advice."
        },
        {
            question: "Is this service considered medical advice?",
            answer: "No. Arogyam is an ingredient identification tool, not medical advice. Always consult your healthcare professional for medical decisions and follow their guidance on what you should be avoiding."
        },
        {
            question: "Does Arogyam ever miss any harmful ingredients?",
            answer: "While we strive for accuracy with our software, no system is perfect. Always read labels yourself and consult your doctor about ingredients you're unsure about. We want our users to utilize Arogyam as an additional safety tool, not your only one."
        }, 
        {
            question: "Will I need to be connected to internet to scan products?",
            answer: "Yes, we need internet to look up product information and run our AI analysis."
        }, 
        {
            question: "What if a product isn't found when I scan it?", 
            answer: "We're constantly updating our database. If a product is not found, we will try our best to add that product to our database as soon as possible."
        },
        {
            question: "Can I add custom ingredients to avoid?", 
            answer:"Absolutely! You can add any ingredient or chemical compound to your avoidance list, whether it's a common allergen or something specific to your condition(s)."
        },
        {
            question: "Is Arogyam free to use?",
            answer: "Absolutely! It is 100% free of charge to create your account and start scanning. However, this service is rate limited -- every day we only have a certain capacity of scans that will be allowed. Arogyam is currently in a stage we would like to refer to as 'demo.' As of today this product brings in profit, thus we are able to invest back into the product to match supply with demand."
        }
    ]
    return (
    <div className='w-full h-[101vh] flex items-center justify-center bg-darkazure'>

    </div>
  )
}

export default Faq