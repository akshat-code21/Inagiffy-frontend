import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

axios.interceptors.request.use((config) => {
    const isAdminEndpoint = config.url?.includes('/admin/');
    const token = isAdminEndpoint 
        ? localStorage.getItem('adminToken')
        : localStorage.getItem('authToken');
    
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const scholarshipService = {
    async getAllScholarships(filters: {
        category?: string;
        minAmount?: number;
        maxAmount?: number;
        deadline?: Date;
        sortBy?: string;
        order?: 'asc' | 'desc';
    }) {
        const endpoint = `${API_URL}/scholarships`;
        const token = localStorage.getItem('adminToken') || localStorage.getItem('authToken');
        
        const response = await axios.get(endpoint, { 
            params: filters,
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    },

    async getScholarshipById(id: string) {
        const response = await axios.get(`${API_URL}/scholarships/${id}`);
        return response.data;
    },

    async saveScholarship(scholarshipId: string) {
        const response = await axios.post(`${API_URL}/user/saved-scholarships/${scholarshipId}`);
        return response.data;
    },

    async unsaveScholarship(scholarshipId: string) {
        await axios.delete(`${API_URL}/user/saved-scholarships/${scholarshipId}`);
    },

    async getSavedScholarships() {
        const response = await axios.get(`${API_URL}/user/saved-scholarships`);
        return response.data;
    },

    async applyForScholarship(scholarshipId: string) {
        try {
            const response = await axios.post(`${API_URL}/user/applications/${scholarshipId}`);
            return response.data;
        } catch (error: any) {
            if (error.response?.status === 400) {
                throw new Error(error.response.data.message);
            }
            throw new Error("Failed to submit application");
        }
    },

    async getApplications() {
        const response = await axios.get(`${API_URL}/user/applications`);
        return response.data;
    },

    async createScholarship(scholarshipData: {
        name: string;
        description: string;
        amount: number;
        deadline: Date;
        category: string;
        eligibility: {
            requirements: string[];
            minGPA: number;
            yearLevels: string[];
        };
        institution: string;
        applyLink: string;
        isDraft?: boolean;
    }) {
        try {
            const response = await axios.post(
                `${API_URL}/admin/scholarships`,
                scholarshipData,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            return response.data;
        } catch (error: any) {
            console.error('Create scholarship error:', error.response || error);
            if (error.response?.status === 401) {
                localStorage.removeItem('adminToken');
                throw new Error('Session expired. Please login again.');
            }
            throw error;
        }
    },
}; 