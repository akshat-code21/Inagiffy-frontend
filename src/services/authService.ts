import axios from "axios";

const API_URL = "http://localhost:3000/api/auth";

export const authService = {
  async registerUser(userData: {
    email: string;
    password: string;
    fullName: string;
    isGoogleUser?: boolean;
  }) {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
  },

  async loginUser(credentials: { 
    email: string; 
    password: string;
    isGoogleUser?: boolean;
  }) {
    const response = await axios.post(`${API_URL}/signin`, credentials);
    return response.data;
  },
}; 