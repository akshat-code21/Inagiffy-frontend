import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/scholarships/:id" element={<ScholarshipDetails />} />
          <Route path="/dashboard/saved" element={<SavedScholarships />} />
          <Route path="/dashboard/applications" element={<Applications />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/add-scholarship" element={<AddScholarship />} />
          <Route path="/admin/dashboard/scholarships" element={<ManageScholarships />} />
          <Route path="/admin/dashboard/applications" element={<ReviewApplications />} />
          <Route path="/admin/dashboard/users" element={<ManageUsers />} />
          <Route path="/admin/dashboard/settings" element={<AdminSettings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
