import { create } from 'zustand';
import axios from 'axios'; 

const API_URL = 'http://localhost:3001/api/ai'; 

axios.defaults.withCredentials = true; 

export const useAIStore = create((set) => ({
    safetyAnalysis: null, 
    isAnalyzing: false, 
    error: null, 
    
    analyzeSafety: async(ingredients, avoidanceList, productName) => {
        set({ isAnalyzing: true, error: null, safetyAnalysis: null }); 

        try {
            const response = await axios.post(`${API_URL}/analyze-safety`, {
                ingredients, 
                avoidanceList,
                productName
            }); 

            set({
                safetyAnalysis: response.data.analysis, 
                isAnalyzing: false
            }); 

            return response.data; 
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Failed to analyze product safety';
            
            set({
                error: errorMessage,
                isAnalyzing: false
            });

            return { success: false, message: errorMessage };
        }
    }, 

    clearAnalysis: () => {
        set({ safetyAnalysis: null, error: null, isAnalyzing: false }); 
    }
})); 
