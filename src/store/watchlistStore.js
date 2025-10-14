import { create } from "zustand";
import axios from 'axios'; 
import toast from "react-hot-toast";
import { i } from "motion/react-client";
import { m } from "motion/react";

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

    addToWatchlist: async (productData) => {
        set({ isLoading: true, error: null}); 
        try {
            const response = await axios.post(`${API_URL}/add`, productData); 
            set({ unsafeProducts: response.data.unsafeProducts, isLoading: false }); 
            toast.success("Product saved"); 
            return { success: true }; 
        } catch (error) {
            const message = error.response?.data?.message || "Failed to add to watchlist"; 
            set({ error: message, isLoading: false}); 
            toast.error(message); 
            return { success: false }; 
        }
    },
    
    removeFromWatchlist: async (barcode) => {
        set({ isLoading: true, error: null }); 
        try {
            const response = await axios.delete(`${API_URL}/remove/${barcode}`); 
            set({ unsafeProducts: response.data.unsafeProducts, isLoading: false}); 
            toast.success("Product removed"); 
        } catch (error) {
            set({
                error: error.response?.data?.message || "Failed to remove from watchlist", 
                isLoading: false
            }); 
            toast.error("Failed"); 
        }
    }
})); 