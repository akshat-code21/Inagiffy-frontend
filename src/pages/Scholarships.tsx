import { motion } from "framer-motion";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { Search, Filter, Calendar, ArrowUpRight, Bookmark, BookMarked } from "lucide-react";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { fetchScholarships, saveScholarship, applyForScholarship, fetchSavedScholarships, unsaveScholarship } from "@/redux/features/scholarship/scholarshipThunks";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Scholarships = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { scholarships, loading, applyingForScholarship, savedScholarships } = useAppSelector((state) => state.scholarship);

  useEffect(() => {
    dispatch(fetchScholarships({}));
    dispatch(fetchSavedScholarships());
  }, [dispatch]);

  const handleSaveScholarship = async (scholarshipId: string) => {
    const isCurrentlySaved = savedScholarships.some(saved => saved.id === scholarshipId);
    
    try {
      if (isCurrentlySaved) {
        await dispatch(unsaveScholarship(scholarshipId)).unwrap();
      } else {
        await dispatch(saveScholarship(scholarshipId)).unwrap();
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to save scholarship. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleApply = async (scholarshipId: string) => {
    try {
      await dispatch(applyForScholarship(scholarshipId)).unwrap();
      toast({
        title: "Success!",
        description: "Your application has been successfully submitted.",
      });
      navigate("/dashboard/applications");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to submit application. Please try again.",
        variant: "destructive",
      });
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
                <Search className="h-8 w-8 text-primary mr-3" />
                <h1 className="text-3xl font-bold">Find Scholarships</h1>
              </div>
              <p className="text-gray-600">
                Discover and filter scholarship opportunities tailored to you
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl p-6 mb-8 shadow-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search scholarships..."
                      className="pl-10"
                    />
                  </div>
                </div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="stem">STEM</SelectItem>
                    <SelectItem value="arts">Arts & Humanities</SelectItem>
                    <SelectItem value="leadership">Leadership</SelectItem>
                    <SelectItem value="diversity">Diversity</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Amount Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Amounts</SelectItem>
                    <SelectItem value="0-5000">$0 - $5,000</SelectItem>
                    <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                    <SelectItem value="10000+">$10,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Filter className="h-4 w-4" />
                  <span>Active filters:</span>
                  <Button variant="secondary" size="sm" className="h-7">
                    Clear all
                  </Button>
                </div>
                <p className="text-sm text-gray-600">Showing {scholarships.length} results</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {scholarships.map((scholarship, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="relative">
                    <div className="absolute top-4 right-4">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleSaveScholarship(scholarship.id)}
                        className="h-8 w-8 rounded-full hover:bg-primary/10 hover:text-primary"
                      >
                        {savedScholarships.some(saved => saved.id === scholarship.id) ? (
                          <Bookmark className="h-4 w-4 fill-black" />
                        ) : (
                          <Bookmark className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                          {scholarship.category}
                        </span>
                        <span className="inline-flex items-center text-sm font-medium text-green-600">
                          {scholarship.matchScore}% Match
                        </span>
                      </div>
                      <CardTitle className="text-lg mt-2">{scholarship.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p className="text-2xl font-bold text-primary">₹ {scholarship.amount}</p>
                        <p className="text-sm text-gray-600">{scholarship.criteria}</p>
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="h-4 w-4 mr-2" />
                          Deadline: {new Date(scholarship.deadline).toLocaleDateString()}
                        </div>
                        <div className="flex gap-2 mt-4">
                          <Button 
                            className="flex-1 gap-2"
                            onClick={() => handleApply(scholarship.id)}
                            disabled={applyingForScholarship}
                          >
                            {applyingForScholarship ? "Submitting..." : "Apply Now"}
                            <ArrowUpRight className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="outline" 
                            className="flex-1"
                            onClick={() => navigate(`/scholarships/${scholarship.id}`)}
                          >
                            Learn More
                          </Button>
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

export default Scholarships;