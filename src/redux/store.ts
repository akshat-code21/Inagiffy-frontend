import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import scholarshipReducer from "./features/scholarship/scholarshipSlice";
import applicationsReducer from "./features/applications/applicationsSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        scholarship: scholarshipReducer,
        applications: applicationsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;