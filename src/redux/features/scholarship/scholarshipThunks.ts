import { createAsyncThunk } from "@reduxjs/toolkit";
import { scholarshipService } from "../../../services/scholarshipService";

export const fetchScholarships = createAsyncThunk(
    "scholarship/fetchAll",
    async (filters: {
        category?: string;
        minAmount?: number;
        maxAmount?: number;
        deadline?: Date;
        sortBy?: string;
        order?: 'asc' | 'desc';
    }, { rejectWithValue }) => {
        try {
            const scholarships = await scholarshipService.getAllScholarships(filters);
            return scholarships;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchScholarshipById = createAsyncThunk(
    "scholarship/fetchOne",
    async (id: string, { rejectWithValue }) => {
        try {
            const scholarship = await scholarshipService.getScholarshipById(id);
            return scholarship;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const saveScholarship = createAsyncThunk(
    "scholarship/save",
    async (scholarshipId: string, { rejectWithValue }) => {
        try {
            const savedScholarship = await scholarshipService.saveScholarship(scholarshipId);
            return savedScholarship;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const unsaveScholarship = createAsyncThunk(
    "scholarship/unsave",
    async (scholarshipId: string, { rejectWithValue }) => {
        try {
            await scholarshipService.unsaveScholarship(scholarshipId);
            return scholarshipId;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchSavedScholarships = createAsyncThunk(
    "scholarship/fetchSaved",
    async (_, { rejectWithValue }) => {
        try {
            const savedScholarships = await scholarshipService.getSavedScholarships();
            return savedScholarships;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const applyForScholarship = createAsyncThunk(
    "scholarship/apply",
    async (scholarshipId: string, { rejectWithValue }) => {
        try {
            const application = await scholarshipService.applyForScholarship(scholarshipId);
            return application;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchApplications = createAsyncThunk(
    "scholarship/fetchApplications",
    async (_, { rejectWithValue }) => {
        try {
            const applications = await scholarshipService.getApplications();
            return applications;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

interface CreateScholarshipData {
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
}

export const createScholarship = createAsyncThunk(
  "scholarship/create",
  async (scholarshipData: CreateScholarshipData, { rejectWithValue }) => {
    try {
      const response = await scholarshipService.createScholarship(scholarshipData);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
); 