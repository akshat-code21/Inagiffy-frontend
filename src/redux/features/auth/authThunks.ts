import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "../../../../firebaseConfig";
import { authService } from "@/services/authService";
import { adminAuthService } from "@/services/adminAuthService";

export const loginUser = createAsyncThunk(
    "auth/login",
    async (credentials: { 
        email: string; 
        password: string;
        isGoogleUser?: boolean;
    }, { rejectWithValue }) => {
        try {
            if (!credentials.isGoogleUser) {
                await signInWithEmailAndPassword(
                    auth,
                    credentials.email,
                    credentials.password
                );
            }

            const { token } = await authService.loginUser(credentials);
            localStorage.setItem("authToken", token);

            return {
                email: credentials.email,
                token,
                role: 'user'
            };
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const registerUser = createAsyncThunk(
    "auth/register",
    async (userData: {
        email: string;
        password: string;
        fullName: string;
        isGoogleUser?: boolean;
    }, { rejectWithValue }) => {
        try {
            if (!userData.isGoogleUser) {
                try {
                    await createUserWithEmailAndPassword(
                        auth,
                        userData.email,
                        userData.password
                    );
                } catch (firebaseError: any) {
                    if (firebaseError.code === 'auth/email-already-in-use') {
                        await signInWithEmailAndPassword(
                            auth,
                            userData.email,
                            userData.password
                        );
                    } else {
                        throw firebaseError;
                    }
                }
            }

            const { token } = await authService.registerUser(userData);
            localStorage.setItem("authToken", token);

            return {
                email: userData.email,
                fullName: userData.fullName,
                token,
                role: 'user'
            };
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const loginAdmin = createAsyncThunk(
    "auth/loginAdmin",
    async (credentials: { 
        email: string; 
        password: string;
    }, { rejectWithValue }) => {
        try {
            await signInWithEmailAndPassword(
                auth,
                credentials.email,
                credentials.password
            );

            const { token } = await adminAuthService.loginAdmin(credentials);
            localStorage.setItem("adminToken", token);

            return {
                email: credentials.email,
                token,
                role: 'admin'
            };
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const registerAdmin = createAsyncThunk(
    "auth/registerAdmin",
    async (adminData: { 
        email: string; 
        password: string; 
        fullName: string;
        adminCode: string;
    }, { rejectWithValue }) => {
        try {
            await createUserWithEmailAndPassword(
                auth,
                adminData.email,
                adminData.password
            );

            const { token } = await adminAuthService.registerAdmin(adminData);
            localStorage.setItem("adminToken", token);

            return {
                email: adminData.email,
                fullName: adminData.fullName,
                token,
                role: 'admin'
            };
        } catch (error: any) {
            if (auth.currentUser) {
                await auth.currentUser.delete();
            }
            return rejectWithValue(error.message);
        }
    }
);

export const logoutUser = createAsyncThunk(
    "auth/logout",
    async (_, { rejectWithValue }) => {
        try {
            await signOut(auth);
            localStorage.removeItem("authToken");
            localStorage.removeItem("adminToken");
            return null;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
); 