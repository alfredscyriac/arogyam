import axios from 'axios';

export const getProductInfo = async (req, res) => {
    const { barcode } = req.params;
    
    try {
        const response = await axios.get(
            `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`
        );
        
        const data = response.data;
        
        if (data.status === 1 && data.product) {
            const productInfo = {
                success: true,
                product: {
                    name: data.product.product_name || 'Unknown Product',
                    brand: data.product.brands || 'Unknown Brand',
                    ingredients: data.product.ingredients_text || 'Ingredients not available',
                    ingredientsList: data.product.ingredients || [],
                    imageUrl: data.product.image_url,
                    categories: data.product.categories,
                    barcode: barcode
                }
            };
            
            res.status(200).json(productInfo);
        } else {
            res.status(404).json({
                success: false,
                message: 'Product not found in database'
            });
        }
    } catch (error) {
        console.error('OpenFoodFacts API Error:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching product information'
        });
    }
};