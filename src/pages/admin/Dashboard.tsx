
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Users,
  FileText,
  Award,
  Clock,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  CheckCircle,
  XCircle,
  AlertTriangle,
} from "lucide-react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import AdminSidebar from "@/components/admin/AdminSidebar";
import Footer from "@/components/Footer";

const Dashboard = () => {
  const { toast } = useToast();

  const quickStats = [
    {
      title: "Total Scholarships",
      value: "150",
      label: "Active Scholarships",
      icon: Award,
      color: "text-primary",
    },
    {
      title: "Pending Applications",
      value: "345",
      label: "Awaiting Review",
      icon: Clock,
      color: "text-yellow-600",
    },
    {
      title: "Registered Users",
      value: "12,500",
      label: "Students",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "New Applications",
      value: "25",
      label: "New Submissions",
      icon: FileText,
      color: "text-green-600",
    },
  ];

  const recentScholarships = [
    {
      name: "XYZ Merit Scholarship",
      addedOn: "Feb 10, 2025",
      status: "Active",
    },
    {
      name: "ABC Need-Based Grant",
      addedOn: "Feb 5, 2025",
      status: "Draft",
    },
  ];

  const pendingApplications = [
    {
      studentName: "Akshat Kumar",
      scholarship: "XYZ Merit Scholarship",
      submissionDate: "Feb 10, 2025",
      status: "Pending",
    },
    {
      studentName: "Priya Sharma",
      scholarship: "ABC Need-Based Grant",
      submissionDate: "Feb 8, 2025",
      status: "Under Review",
    },
  ];

  const recentUsers = [
    {
      name: "Rahul Gupta",
      email: "rahul@example.com",
      role: "Student",
    },
    {
      name: "Admin1",
      email: "admin@example.com",
      role: "Admin",
    },
  ];

  const handleAction = (action: string, item: string) => {
    toast({
      title: `${action} - ${item}`,
      description: `${action} action triggered for ${item}`,
    });
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AdminSidebar />
        <main className="flex-1 bg-gray-50">
          <div className="p-8">
            {/* Dashboard Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {quickStats.map((stat, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`rounded-full p-3 bg-white shadow-sm ${stat.color} ring-1 ring-gray-100`}
                        >
                          <stat.icon className="h-6 w-6" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold">{stat.value}</h3>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Recent Scholarship Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8"
            >
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Recent Scholarship Activity</CardTitle>
                  <Button asChild variant="outline">
                    <Link to="/admin/dashboard/scholarships">View All</Link>
                  </Button>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Scholarship Name</TableHead>
                        <TableHead>Added On</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentScholarships.map((scholarship, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">
                            {scholarship.name}
                          </TableCell>
                          <TableCell>{scholarship.addedOn}</TableCell>
                          <TableCell>
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                scholarship.status === "Active"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {scholarship.status}
                            </span>
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreVertical className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => handleAction("Edit", scholarship.name)}>
                                  <Edit className="h-4 w-4 mr-2" />
                                  Edit
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  className="text-destructive"
                                  onClick={() => handleAction("Delete", scholarship.name)}
                                >
                                  <Trash2 className="h-4 w-4 mr-2" />
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </motion.div>

            {/* Pending Applications Review */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Pending Applications</CardTitle>
                  <Button asChild variant="outline">
                    <Link to="/admin/dashboard/applications">View All</Link>
                  </Button>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Student Name</TableHead>
                        <TableHead>Scholarship Applied</TableHead>
                        <TableHead>Submission Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {pendingApplications.map((application, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">
                            {application.studentName}
                          </TableCell>
                          <TableCell>{application.scholarship}</TableCell>
                          <TableCell>{application.submissionDate}</TableCell>
                          <TableCell>
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                application.status === "Pending"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-blue-100 text-blue-800"
                              }`}
                            >
                              {application.status}
                            </span>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleAction("Review", application.studentName)}
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                              {application.status === "Pending" && (
                                <>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-green-600"
                                    onClick={() => handleAction("Approve", application.studentName)}
                                  >
                                    <CheckCircle className="h-4 w-4" />
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-destructive"
                                    onClick={() => handleAction("Reject", application.studentName)}
                                  >
                                    <XCircle className="h-4 w-4" />
                                  </Button>
                                </>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </motion.div>

            {/* User Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Recent User Signups</CardTitle>
                  <Button asChild variant="outline">
                    <Link to="/admin/dashboard/users">View All</Link>
                  </Button>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentUsers.map((user, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{user.name}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                user.role === "Admin"
                                  ? "bg-primary/10 text-primary"
                                  : "bg-gray-100 text-gray-800"
                              }`}
                            >
                              {user.role}
                            </span>
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreVertical className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => handleAction("View", user.name)}>
                                  <Eye className="h-4 w-4 mr-2" />
                                  View Profile
                                </DropdownMenuItem>
                                {user.role === "Student" && (
                                  <DropdownMenuItem
                                    className="text-destructive"
                                    onClick={() => handleAction("Suspend", user.name)}
                                  >
                                    <AlertTriangle className="h-4 w-4 mr-2" />
                                    Suspend Account
                                  </DropdownMenuItem>
                                )}
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </motion.div>

            {/* Footer */}
          </div>
            <Footer/>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;