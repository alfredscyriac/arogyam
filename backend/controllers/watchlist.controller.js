import { User } from '../models/user.model.js'; 

export const addToWatchlist = async (req, res) => {
    try {
        const userId= req.userId; 
        const { productName, barcode, imageUrl, matchedIngredients, safetyScore } = req.body(); 

        if(!productName || !barcode || !matchedIngredients) {
            return res.status(400).json({ success: false, message: "Missing required fields" }); 
        }

        const user = await User.findById(userId); 
        if(!user){
            return res.status(404).json({ success: false, message: "User not found" }); 
        }

        const existingProduct = user.unsafeProducts.find(p => p.barcode === barcode); 
        if (existingProduct) {
            return res.status(400).json({ success: false, message: "Product already in watchlist" }); 
        }

        user.unsafeProducts.push({
            productName, 
            barcode, 
            imageUrl, 
            matchedIngredients, 
            safetyScore,
            scannedAt: new Date()
        }); 

        await user.save(); 

        res.status(200).json({
            success: true, 
            message: "Product added to watchlist", 
            unsafeProducts: user.unsafeProducts
        }); 
    } catch (error) {
        console.error("Error adding to watchlist:",error); 
        res.status(500).json({ success: false, message: error.message }); 
    }
}; 

export const removeFromWatchlist = async (req, res) => {
    try {
        const userId = req.userId; 
        const { barcode } = req.params; 

        const user = await User.findById(userId); 
        if(!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        user.unsafeProducts = user.unsafeProducts.filter(p => p.barcode !== barcode); 
        await user.save(); 

        res.status(200).json({
            success: true, 
            message: "Product removed from watchlist", 
            unsafeProducts: user.unsafeProducts
        }); 
    } catch (error) {
        console.error("Error removing from watchlist:", error); 
        res.status(500).json({ success: false, message: error.message }); 
    }
};

export const getWatchlist = async (req, res) => {
    try {
        const userId = req.userId; 

        const user = User.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        } 

        res.status(200).json({
            success: true, 
            unsafeProducts: user.unsafeProducts
        });
    } catch(error) {
        console.error("Error fetching watchlist:", error); 
        res.status(500).json({ success: false, message: error.message }); 
    }
}; 