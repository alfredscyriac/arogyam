import { create } from 'zustand';
import axios from "axios"; 

const API_URL = "http://localhost:3001/api/dashboard";

axios.defaults.withCredentials = true; 

export const useDashboardStore = create((set) => ({
    avoidanceList: [], 
    isLoading: false, 
    error: null,

    fetchAvoidanceList: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.get(`${API_URL}/avoidances`); 
            set({ avoidanceList: response.data.avoidanceList, isLoading: false });
        } catch (error) {
            set({ error: error.response.data.message || "Error fetching avoidances", isLoading: false}); 
        }
    }, 

    addIngredient: async(ingredient) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.get(`${API_URL}/avoidances/add`, { ingredient});
            set({ avoidanceList: response.data.avoidanceList, isLoading: false}); 
        } catch (error) {
            set({ error: error.response.data.message || "Error adding ingredient", isLoading: false}); 
        }
    },

    removeIngredient: async(ingredient) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.delete(`${API_URL}/avoidances/remove`, {ingredient}); 
            set({ avoidanceList: response.data.avoidanceList, isLoading: false}); 
        } catch (error) {
            set({ error: error.response.data.message || "Error removing ingredient", isLoading: false}); 
        }
    },
})); 