import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";
interface Application {
  id: string;
  userId: string;
  scholarshipId: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  appliedAt: string;
  scholarship: {
    id: string;
    name: string;
    description: string;
    amount: number | null;
    deadline: string;
    institution: string;
    category: 'GOVERNMENT' | 'PRIVATE' | 'STATE';
    applyLink: string;
  };
}

interface ApplicationsState {
  applications: Application[];
  loading: boolean;
  error: string | null;
}

const initialState: ApplicationsState = {
  applications: [],
  loading: false,
  error: null,
};

export const fetchApplications = createAsyncThunk(
  'applications/fetchApplications',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/user/applications`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      console.log('API Response:', response.data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch applications');
    }
  }
);

export const createApplication = createAsyncThunk(
  'applications/createApplication',
  async (scholarshipId: string, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/user/applications/${scholarshipId}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to create application');
    }
  }
);

const applicationsSlice = createSlice({
  name: 'applications',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchApplications.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchApplications.fulfilled, (state, action) => {
        state.loading = false;
        state.applications = action.payload;
      })
      .addCase(fetchApplications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(createApplication.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createApplication.fulfilled, (state, action) => {
        state.loading = false;
        state.applications.push(action.payload);
      })
      .addCase(createApplication.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default applicationsSlice.reducer; 