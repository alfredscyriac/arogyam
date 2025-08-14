import { create } from 'zustand';
import axios from "axios"; 

const API_URL = "http://localhost:3001/api/auth";

axios.defaults.withCredentials = true; 

export const useAuthStore = create((set) => ({
    user: null, 
    isAuthenticated: false, 
    error: null, 
    isLoading: false, 
    isCheckingAuth: true, 

    signup: async(email, password, name) => {
        set({isLoading: true, error:null}); 
        try {
            const response = await axios.post(`${API_URL}/signup`,{email, password, name}); 
            set({user:response.data.user, isAuthenticated:true, isLoading:false});
        } catch (error) {
            set({error:error.response.data.message || "Error signing up", isLoading: false});
            throw error; 
        }
    },
    signin: async(email, password) => {
        set({isLoading: true, error: null}); 
        try {
            const response = await axios.post(`${API_URL}/signin`, { email, password }); 
            set({
                isAuthenticated: true, 
                user: response.data.user,
                error: null, 
                isLoading: false,
            }); 
        } catch (error) {
            set({ error: error.response.data.message || "Error signing in", isLoading: false });
            throw error;
        }
    },
    verifyEmail: async (code) => {
        set({isLoading: true, error: null}); 
        try {
            const response = await axios.post(`${API_URL}/verifyemail`,{code}); 
            set({user: response.data.user, isAuthenticated: true, isLoading: false}); 
            return response.data;
        } catch (error) {
            set({error: error.response.data.message || "Error verifying email", isLoading: false});
            throw error; 
            
        }
    },
    checkAuth: async () => {
        set({isCheckingAuth: true, error: null}); 
        try {
            const response = await axios.get(`${API_URL}/checkauth`); 
            set({ user: response.data.user, isAuthenticated: true, isCheckingAuth: false }); 
        } catch (error) {
            set({ error:null, isCheckingAuth: false, isAuthenticated: false});
        }
    },
    logout: async () => {
        set({isLoading: true, error: null}); 
        try {
            await axios.post(`${API_URL}/logout`);
            set({user: null, isAuthenticated: false, isLoading: false, error: null}); 
        } catch (error) {
            set({error: error.response.data.message || "Error logging out", isLoading: false}); 
            throw error; 
        }
    }, 
    forgotPassword: async(email) => {
        set({ isLoading: true, error: null, message: null}); 
        try {
            const response = await axios.post(`${API_URL}/forgotpassword`, { email }); 
            set({message: response.data.message, isLoading: false}); 
        } catch (error) {
            set({
                isLoading: false,
                error: error.response.data.message || "Error sending reset password email",
            });
            throw error; 
        }
    },
}));

