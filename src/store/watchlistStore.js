import { create } from "zustand";
import axios from 'axios'; 
import toast from "react-hot-toast";
import { i } from "motion/react-client";

const API_URL = 'http://localhost:3001/api/watchlist'; 

axios.defaults.withCredentials = true; 

export const useWatchlistStore = create((set) => ({
    unsafeProducts: [], 
    isLoading: false, 
    error: null, 

    fetchWatchlist: async() => {
        set({ isLoading: true, error: null }); 
        try {
            const response = await axios.get(API_URL); 
            set({ unsafeProducts: response.data.unsafeProducts, isLoading: false}); 
        } catch (error) {
            set({
                error: error.response?.data?.message || "Failed to fetch waitlist", 
                isLoading: false
            });
            toast.error("Failed to load watchlist"); 
        }
    },
}))