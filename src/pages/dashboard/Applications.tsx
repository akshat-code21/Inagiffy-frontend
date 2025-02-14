import { motion } from "framer-motion";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { FileText, Clock } from "lucide-react";

const Applications = () => {
  const applications = [
    {
      name: "Global Student Scholarship",
      amount: "$10,000",
      deadline: "2024-04-30",
      status: "Pending Review",
      progress: 100,
      documents: ["Transcript", "Essay", "Recommendation Letter"],
    },
    {
      name: "Academic Merit Award",
      amount: "$5,000",
      deadline: "2024-03-15",
      status: "Accepted",
      progress: 100,
      documents: ["Transcript", "Essay", "Portfolio"],
    },
    {
      name: "Future Tech Leaders",
      amount: "$7,500",
      deadline: "2024-05-20",
      status: "In Progress",
      progress: 60,
      documents: ["Resume", "Project Portfolio", "Essay"],
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
              {applications.map((application, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{application.name}</h3>
                          <p className="text-primary font-bold">{application.amount}</p>
                        </div>
                        <div className="mt-4 md:mt-0">
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                              application.status === "Accepted"
                                ? "bg-green-100 text-green-800"
                                : application.status === "Pending Review"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {application.status}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-gray-600">Application Progress</span>
                            <span className="text-sm font-medium">{application.progress}%</span>
                          </div>
                          <Progress value={application.progress} className="h-2" />
                        </div>

                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="h-4 w-4 mr-2" />
                          Deadline: {new Date(application.deadline).toLocaleDateString()}
                        </div>

                        <div>
                          <p className="text-sm font-medium mb-2">Required Documents:</p>
                          <div className="flex flex-wrap gap-2">
                            {application.documents.map((doc, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                              >
                                {doc}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-2 mt-4">
                          <Button className="flex-1">Continue Application</Button>
                          <Button variant="outline" className="flex-1">View Details</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Applications;