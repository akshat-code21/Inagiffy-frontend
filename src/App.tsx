import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Signup from "@/pages/Signup";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import About from "./pages/About";
import Dashboard from "./pages/dashboard/Dashboard";
import Settings from "./pages/dashboard/Settings";
import Applications from "./pages/dashboard/Applications";
import SavedScholarships from "./pages/dashboard/SavedScholarships";
import Scholarships from "./pages/Scholarships";
import Profile from "./pages/Profile";
import ScholarshipDetails from "./pages/ScholarshipDetails";
import AdminDashboard from "./pages/admin/Dashboard";
import AddScholarship from "./pages/admin/AddScholarship";
import ManageScholarships from "./pages/admin/ManageScholarships";
import ReviewApplications from "./pages/admin/ReviewApplications";
import ManageUsers from "./pages/admin/ManageUsers";
import AdminSettings from "./pages/admin/AdminSettings";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminProtectedRoute from "./components/auth/AdminProtectedRoute";
import AdminSignup from "./pages/admin/AdminSignup";
import { Provider } from 'react-redux';
import { store } from './redux/store';
const queryClient = new QueryClient();

const App = () => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/scholarships" element={<Scholarships />} />
            <Route
              path="/scholarships/:id"
              element={
                <ProtectedRoute>
                  <ScholarshipDetails />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/saved"
              element={
                <ProtectedRoute>
                  <SavedScholarships />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/applications"
              element={
                <ProtectedRoute>
                  <Applications />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/settings"
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              }
            />
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/signup" element={<AdminSignup />} />
            <Route
              path="/admin/dashboard"
              element={
                <AdminProtectedRoute>
                  <AdminDashboard />
                </AdminProtectedRoute>
              }
            />
            <Route path="/admin/add-scholarship" element={
              <AdminProtectedRoute>
                <AddScholarship />
              </AdminProtectedRoute>
            } />
            <Route path="/admin/dashboard/scholarships" element={
              <AdminProtectedRoute>
                <ManageScholarships />
              </AdminProtectedRoute>
            } />
            <Route path="/admin/dashboard/applications" element={
              <AdminProtectedRoute>
                <ReviewApplications />
              </AdminProtectedRoute>
            } />
            <Route path="/admin/dashboard/users" element={
              <AdminProtectedRoute>
                <ManageUsers />
              </AdminProtectedRoute>
            } />
            <Route path="/admin/dashboard/settings" element={
              <AdminProtectedRoute>
                <AdminSettings />
              </AdminProtectedRoute>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  </Provider>
);

export default App;
