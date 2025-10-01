import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY); 

export const analyzeSafety = async(req, res) => {
    const { ingredients, avoidanceList, productName } = req.body; 

    if(!ingredients || !avoidanceList) {
        return res.status(400).json({
            success: false, 
            message: 'Ingredients and avoidance list are BOTH required'
        }); 
    }

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" }); 

        const prompt = `
        You are a food safety analyst. Analyze the follow product ingredients user's avoidance list. 
        **Product Name:** ${productName || 'Unknown Product'}
        **Ingredients:** ${ingredients}
        **User's Avoidance List:** ${avoidanceList.join(', ')}
        **Task**: 
        1. Check if ANY ingredients from the avoidance list are present in the product (consider variations, e.g.,
        "milk" matches "milk powder", be mindful of technical markups companies use on their ingredients list to 
        make certain products seem like they don't have some ingredient, read deeply into technical markups,
        make sure each and every single ingredient is evaluated carefully amongst all the user's avoidances)
        2. Caclulate a safety score from 0-100 (0 = extremely unsafe for the user, 100 = completely safe for the user)
        3. Provide a brief explanation (2-3 sentences max) on why the product is or is not safe for the user. If there 
        are any technical markups or coverups please make that obvious in the response so the user can indentify it. 
        4. List any matching harmful ingredients found
        
        **Response Format (JSON only, no markdown):**
        {
            "safetyScore": <number 0-100>, 
            "isSafe": <boolean>, 
            "explanation": "<brief explanation>", 
            "matchedIngredients": ["<ingredient1>", "<ingredient2>"],
            "confidence": "<high/medium/low>" 
        }

        Respond ONLY with valid JSON, no additional text. 
        `; 

        const result = await model.generateContent(prompt); 
        const response = result.response; 
        const text = response.text(); 
        
        const cleanedText = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        const analysisResult = JSON.parse(cleanedText);

        res.status(200).json({
            success: true, 
            analysis: analysisResult
        }); 
    } catch (error) {
        console.error('Gemini AI Error:', error);
        res.status(500).json({
            success: false,
            message: 'Error analyzing product safety'
        });
    }
};