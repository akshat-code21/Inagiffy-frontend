import { motion } from "framer-motion";
import { ArrowRight, Clock, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import Footer from "@/components/Footer";

const Dashboard = () => {
  const quickStats = [
    { label: "Saved Scholarships", value: "12", icon: Award },
    { label: "Applications in Progress", value: "5", icon: Clock },
    { label: "Deadlines Approaching", value: "3", icon: Clock },
  ];

  const recommendedScholarships = [
    {
      name: "STEM Excellence Scholarship",
      amount: "$5,000",
      deadline: "2024-05-15",
      criteria: "Computer Science, GPA 3.5+",
    },
    {
      name: "Future Leaders Grant",
      amount: "$3,000",
      deadline: "2024-06-01",
      criteria: "Leadership experience, Any major",
    },
    {
      name: "Women in Technology",
      amount: "$7,500",
      deadline: "2024-05-30",
      criteria: "Female students in Tech",
    },
  ];

  const savedScholarships = recommendedScholarships.slice(0, 2);

  const applications = [
    {
      name: "Global Student Scholarship",
      status: "Pending",
      deadline: "2024-04-30",
    },
    {
      name: "Academic Merit Award",
      status: "Accepted",
      deadline: "2024-03-15",
    },
  ];

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
              className="bg-white rounded-xl p-8 mb-8 shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-3xl font-bold mb-2">
                    Welcome back, John! 🎉
                  </h1>
                  <p className="text-gray-600">
                    Ready to explore new opportunities?
                  </p>
                </div>
                <Button asChild size="lg" className="mt-4 md:mt-0">
                  <Link to="/scholarships">
                    Find Scholarships
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {quickStats.map((stat, index) => (
                  <Card key={index}>
                    <CardContent className="flex items-center p-6">
                      <div className="rounded-full p-3 bg-primary/10 mr-4">
                        <stat.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">{stat.label}</p>
                        <h3 className="text-2xl font-bold">{stat.value}</h3>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl p-6 mb-8 shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h2 className="text-lg font-semibold">
                    Complete Your Profile for Better Matches!
                  </h2>
                  <p className="text-sm text-gray-600">70% completed</p>
                </div>
                <Button asChild variant="outline" className="mt-4 md:mt-0">
                  <Link to="/dashboard/settings">Update Profile</Link>
                </Button>
              </div>
              <Progress value={70} className="h-2" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Recommended for You</h2>
                <Button asChild variant="outline">
                  <Link to="/scholarships">View All</Link>
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendedScholarships.map((scholarship, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">
                        {scholarship.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <p className="text-2xl font-bold text-primary">
                          {scholarship.amount}
                        </p>
                        <p className="text-sm text-gray-600">
                          {scholarship.criteria}
                        </p>
                        <p className="text-sm">
                          Deadline:{" "}
                          {new Date(scholarship.deadline).toLocaleDateString()}
                        </p>
                        <Button className="w-full mt-4">Apply Now</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Saved Scholarships</h2>
                  <Button asChild variant="outline">
                    <Link to="/dashboard/saved">View All</Link>
                  </Button>
                </div>
                <div className="space-y-4">
                  {savedScholarships.map((scholarship, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-2">
                          {scholarship.name}
                        </h3>
                        <p className="text-primary font-bold">
                          {scholarship.amount}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          Deadline:{" "}
                          {new Date(scholarship.deadline).toLocaleDateString()}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">My Applications</h2>
                  <Button asChild variant="outline">
                    <Link to="/dashboard/applications">View All</Link>
                  </Button>
                </div>
                <div className="space-y-4">
                  {applications.map((application, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-2">
                          {application.name}
                        </h3>
                        <div className="flex justify-between items-center">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              application.status === "Accepted"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {application.status}
                          </span>
                          <p className="text-sm text-gray-600">
                            Due:{" "}
                            {new Date(
                              application.deadline
                            ).toLocaleDateString()}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          <Footer />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
