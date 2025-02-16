import { createSlice } from "@reduxjs/toolkit";
import { 
    fetchScholarships, 
    fetchScholarshipById,
    saveScholarship,
    unsaveScholarship,
    applyForScholarship,
    fetchSavedScholarships,
    fetchApplications,
    createScholarship
} from "./scholarshipThunks";

interface Scholarship {
    id: string;
    name: string;
    provider: string;
    type: string;
    deadline: Date;
    status: string;
    description: string;
    amount: number;
    category: string;
    criteria?: string;
    matchScore?: number;
    eligibility: {
        requirements: string[];
        minGPA: number;
        yearLevels: string[];
    };
    institution: string;
    applyLink: string;
    isDraft?: boolean;
}

interface Application {
    id: string;
    status: 'PENDING' | 'APPROVED' | 'REJECTED';
    scholarship: Scholarship;
    createdAt: Date;
}

interface SavedScholarshipItem {
    scholarship: Scholarship;
}

interface ScholarshipState {
    scholarships: Scholarship[];
    currentScholarship: Scholarship | null;
    savedScholarships: Scholarship[];
    applications: Application[];
    loading: boolean;
    error: string | null;
    applyingForScholarship: boolean;
}

const initialState: ScholarshipState = {
    scholarships: [],
    currentScholarship: null,
    savedScholarships: [],
    applications: [],
    loading: false,
    error: null,
    applyingForScholarship: false,
};

const scholarshipSlice = createSlice({
    name: "scholarship",
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchScholarships.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchScholarships.fulfilled, (state, action) => {
                state.loading = false;
                state.scholarships = action.payload;
            })
            .addCase(fetchScholarships.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(fetchScholarshipById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchScholarshipById.fulfilled, (state, action) => {
                state.loading = false;
                state.currentScholarship = action.payload;
            })
            .addCase(fetchScholarshipById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(saveScholarship.fulfilled, (state, action) => {
                state.savedScholarships.push(action.payload.scholarship);
            })
            .addCase(unsaveScholarship.fulfilled, (state, action) => {
                state.savedScholarships = state.savedScholarships.filter(
                    (s) => s.id !== action.payload
                );
            })
            .addCase(fetchSavedScholarships.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchSavedScholarships.fulfilled, (state, action) => {
                state.loading = false;
                state.savedScholarships = action.payload.map((item: SavedScholarshipItem) => item.scholarship);
            })
            .addCase(fetchSavedScholarships.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(applyForScholarship.pending, (state) => {
                state.applyingForScholarship = true;
                state.error = null;
            })
            .addCase(applyForScholarship.fulfilled, (state, action) => {
                state.applyingForScholarship = false;
                state.applications.push(action.payload);
            })
            .addCase(applyForScholarship.rejected, (state, action) => {
                state.applyingForScholarship = false;
                state.error = action.payload as string;
            })
            .addCase(fetchApplications.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchApplications.fulfilled, (state, action) => {
                state.loading = false;
                state.applications = action.payload;
            })
            .addCase(fetchApplications.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(createScholarship.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createScholarship.fulfilled, (state, action) => {
                state.loading = false;
                state.scholarships.unshift(action.payload);
            })
            .addCase(createScholarship.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { clearError } = scholarshipSlice.actions;
export default scholarshipSlice.reducer; 