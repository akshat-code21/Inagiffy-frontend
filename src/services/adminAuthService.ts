import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export const adminAuthService = {
  async registerAdmin(adminData: {
    email: string;
    password: string;
    fullName: string;
    adminCode: string;  
  }) {
    const response = await axios.post(`${API_URL}/admin/signup`, adminData);
    return response.data;
  },

  async loginAdmin(credentials: { 
    email: string; 
    password: string;
  }) {
    const response = await axios.post(`${API_URL}/admin/signin`, credentials);
    return response.data;
  },
}; 