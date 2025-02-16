import axios from "axios";

const API_URL = "http://localhost:3000/api/admin";

export const adminAuthService = {
  async registerAdmin(adminData: {
    email: string;
    password: string;
    fullName: string;
    adminCode: string;  
  }) {
    const response = await axios.post(`${API_URL}/signup`, adminData);
    return response.data;
  },

  async loginAdmin(credentials: { 
    email: string; 
    password: string;
  }) {
    const response = await axios.post(`${API_URL}/signin`, credentials);
    return response.data;
  },
}; 