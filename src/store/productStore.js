import { create } from 'zustand';
import axios from 'axios';

const API_URL = "http://localhost:3001/api/products";

axios.defaults.withCredentials = true;

export const useProductStore = create((set) => ({
    productInfo: null,
    isLoadingProduct: false,
    error: null,

    fetchProductInfo: async (barcode) => {
        set({ isLoadingProduct: true, error: null, productInfo: null });
        
        try {
            const response = await axios.get(`${API_URL}/info/${barcode}`);
            set({ productInfo: response.data, isLoadingProduct: false });
            return response.data;
        } catch (error) {
            const errorData = {
                success: false,
                message: error.response?.status === 404 
                    ? 'Product not found in database'
                    : 'Network error - please check your connection'
            };
            
            set({ 
                productInfo: errorData, 
                error: error.response?.data?.message || errorData.message, 
                isLoadingProduct: false 
            });
            
            return errorData;
        }
    },

    clearProductInfo: () => {
        set({ productInfo: null, error: null, isLoadingProduct: false });
    },
}));