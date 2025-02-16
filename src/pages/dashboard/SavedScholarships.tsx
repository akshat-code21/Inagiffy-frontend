import { motion } from "framer-motion";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { Award, Calendar } from "lucide-react";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { fetchSavedScholarships, unsaveScholarship } from "@/redux/features/scholarship/scholarshipThunks";

const SavedScholarships = () => {
  const dispatch = useAppDispatch();
  const { savedScholarships, loading } = useAppSelector((state) => state.scholarship);

  useEffect(() => {
    dispatch(fetchSavedScholarships());
  }, [dispatch]);

  const handleRemoveScholarship = (scholarshipId: string) => {
    dispatch(unsaveScholarship(scholarshipId));
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
                <Award className="h-8 w-8 text-primary mr-3" />
                <h1 className="text-3xl font-bold">Saved Scholarships</h1>
              </div>
              <p className="text-gray-600">
                Track and manage your saved scholarship opportunities
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedScholarships.map((scholarship, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">{scholarship.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p className="text-2xl font-bold text-primary">{scholarship.amount}</p>
                        <p className="text-sm text-gray-600">{scholarship.criteria}</p>
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="h-4 w-4 mr-2" />
                          Deadline: {new Date(scholarship.deadline).toLocaleDateString()}
                        </div>
                        <div className="flex items-center justify-between">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              scholarship.status === "Deadline Approaching"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-green-100 text-green-800"
                            }`}
                          >
                            {scholarship.status}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <Button className="flex-1">Apply Now</Button>
                          <Button variant="outline" className="flex-1" onClick={() => handleRemoveScholarship(scholarship.id)}>Remove</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
            <Footer/>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default SavedScholarships;