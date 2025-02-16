import { motion } from "framer-motion";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { FileText, Clock } from "lucide-react";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApplications } from "@/redux/features/applications/applicationsSlice";
import type { RootState, AppDispatch } from "@/redux/store";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Applications = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { applications, loading, error } = useSelector((state: RootState) => state.applications);
  const navigate = useNavigate();


  useEffect(() => {
    dispatch(fetchApplications());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "APPROVED":
        return "bg-green-100 text-green-800";
      case "PENDING":
        return "bg-yellow-100 text-yellow-800";
      case "REJECTED":
        return "bg-red-100 text-red-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <main className="flex-1 bg-gray-50">
          <div className="p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="flex items-center mb-6">
                <FileText className="h-8 w-8 text-primary mr-3" />
                <h1 className="text-3xl font-bold">My Applications</h1>
              </div>
              <p className="text-gray-600">
                Track and manage your scholarship applications
              </p>
            </motion.div>

            <div className="space-y-6">
              {applications?.length === 0 ? (
                <Card>
                  <CardContent className="p-6 text-center">
                    <p className="text-gray-600">You haven't applied to any scholarships yet.</p>
                    <Button className="mt-4" onClick={() => navigate('/dashboard/scholarships')}>
                      Browse Scholarships
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                applications?.map((application, index) => (
                  <motion.div
                    key={application.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold mb-2">{application.scholarship.name}</h3>
                            <p className="text-primary font-bold">
                              ${application.scholarship.amount?.toLocaleString()}
                            </p>
                          </div>
                          <div className="mt-4 md:mt-0">
                            <span
                              className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                                application.status
                              )}`}
                            >
                              {application.status}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm text-gray-600">Application Status</span>
                              <span className="text-sm font-medium">
                                {application.status === "PENDING" ? "Under Review" : application.status}
                              </span>
                            </div>
                            <Progress 
                              value={application.status === "APPROVED" ? 100 : application.status === "PENDING" ? 50 : 0} 
                              className="h-2" 
                            />
                          </div>

                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="h-4 w-4 mr-2" />
                            Deadline: {new Date(application.scholarship.deadline).toLocaleDateString()}
                          </div>

                          <div className="flex gap-2 mt-4">
                            <Button 
                              className="flex-1"
                              onClick={() => window.open(application.scholarship.applyLink, '_blank')}
                            >
                              View Application
                            </Button>
                            <Button variant="outline" className="flex-1">View Details</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))
              )}
            </div>
          </div>
          <Footer/>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Applications;