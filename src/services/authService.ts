import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export const authService = {
  async registerUser(userData: {
    email: string;
    password: string;
    fullName: string;
    isGoogleUser?: boolean;
  }) {
    const response = await axios.post(`${API_URL}/auth/signup`, userData);
    return response.data;
  },

  async loginUser(credentials: { 
    email: string; 
    password: string;
    isGoogleUser?: boolean;
  }) {
    const response = await axios.post(`${API_URL}/auth/signin`, credentials);
    return response.data;
  },
}; 