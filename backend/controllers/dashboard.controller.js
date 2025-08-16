import { User } from '../models/user.model.js'

export const getAvoidanceList = async(req, res) => { 
    try {
        const user = await User.findById(req.userId);
        res.status(200).json({ avoidanceList: user.avoidanceList });
    } catch (error) {
        res.status(500).json({ message: error.message }); 
        
    }
}; 

export const addIngredient = async(req, res) => {
    try {
        const { ingredient } = req.body; 
        const user = await User.findById(req.userId); 

        if(!user.avoidanceList.includes(ingredient.toLowerCase())) {
            user.avoidanceList.push(ingredient); 
            await user.save(); 
        }

        res.status(200).json({avoidanceList: user.avoidanceList}); 
    } catch(error) {
        res.status(500).json({ message: error.message }); 
    }
}; 

export const removeIngredient = async(req, res) => {
    try {
        const { ingredient } = req.body; 
        const user = await User.findById(req.userId); 

        user.avoidanceList = user.avoidanceList.filter(item => item !== ingredient); 
        await user.save(); 

        res.status(200).json({ avoidanceList: user.avoidanceList }); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}; 