import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  MoreVertical,
  Eye,
  Mail,
  CheckCircle,
  X,
  User,
  FileText,
  Calendar,
  School,
  Phone,
  Home,
  FileCheck,
} from "lucide-react";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import AdminSidebar from "@/components/admin/AdminSidebar";
import Footer from "@/components/Footer";

interface Application {
  id: string;
  studentName: string;
  scholarshipName: string;
  submittedDate: Date;
  status: "Pending" | "Under Review" | "Approved" | "Rejected";
  email: string;
  phone: string;
  dob: Date;
  address: string;
  category: string;
  qualification: string;
  percentage: number;
  schoolName: string;
  documents: {
    name: string;
    type: string;
    url: string;
  }[];
}

const ReviewApplications = () => {
  const { toast } = useToast();
  const [selectedApplications, setSelectedApplications] = useState<string[]>([]);
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [viewApplication, setViewApplication] = useState<Application | null>(null);
  const [reviewNotes, setReviewNotes] = useState("");

  const applications: Application[] = [
    {
      id: "1",
      studentName: "John Doe",
      scholarshipName: "XYZ Merit Scholarship",
      submittedDate: new Date("2025-02-10"),
      status: "Pending",
      email: "johndoe@example.com",
      phone: "+91 9876543210",
      dob: new Date("2004-01-10"),
      address: "XYZ City, India",
      category: "OBC",
      qualification: "12th Grade (Science)",
      percentage: 88,
      schoolName: "XYZ Public School",
      documents: [
        { name: "Marksheet", type: "PDF", url: "#" },
        { name: "Income Certificate", type: "PDF", url: "#" },
        { name: "ID Proof", type: "PDF", url: "#" },
      ],
    },
  ];

  const handleAction = (action: "approve" | "reject", applicationId: string) => {
    toast({
      title: `Application ${action === "approve" ? "Approved" : "Rejected"}`,
      description: `Application has been ${action === "approve" ? "approved" : "rejected"} successfully.`,
    });
  };

  const handleBulkAction = (action: "approve" | "reject") => {
    toast({
      title: `Bulk ${action === "approve" ? "Approval" : "Rejection"}`,
      description: `${selectedApplications.length} applications have been ${
        action === "approve" ? "approved" : "rejected"
      }.`,
    });
    setSelectedApplications([]);
  };

  const getStatusBadge = (status: Application["status"]) => {
    const styles = {
      Pending: "bg-yellow-100 text-yellow-800",
      "Under Review": "bg-blue-100 text-blue-800",
      Approved: "bg-green-100 text-green-800",
      Rejected: "bg-red-100 text-red-800",
    };

    return (
      <Badge variant="outline" className={`${styles[status]}`}>
        {status}
      </Badge>
    );
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AdminSidebar />
        <main className="flex-1 bg-gray-50 flex flex-col">
          <div className="flex-1 p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
            >
              <div>
                <h1 className="text-3xl font-bold">Review Applications</h1>
                <p className="text-muted-foreground">
                  Review and manage scholarship applications
                </p>
              </div>
              {selectedApplications.length > 0 && (
                <div className="flex gap-4 mt-4 md:mt-0">
                  <Button
                    variant="outline"
                    onClick={() => handleBulkAction("approve")}
                    className="gap-2"
                  >
                    <CheckCircle className="h-4 w-4" />
                    Approve Selected
                  </Button>
                  <Button
                    variant="outline"
                    className="gap-2 text-destructive"
                    onClick={() => handleBulkAction("reject")}
                  >
                    <X className="h-4 w-4" />
                    Reject Selected
                  </Button>
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8"
            >
              <Card className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search applications..."
                      className="pl-9"
                    />
                  </div>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Scholarship" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="xyz">XYZ Merit Scholarship</SelectItem>
                      <SelectItem value="abc">ABC Need-Based Grant</SelectItem>
                      <SelectItem value="sports">Sports Excellence Fund</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="under-review">Under Review</SelectItem>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start">
                        <Calendar className="mr-2 h-4 w-4" />
                        {dateRange?.from ? (
                          dateRange.to ? (
                            <>
                              {format(dateRange.from, "LLL dd, y")} -{" "}
                              {format(dateRange.to, "LLL dd, y")}
                            </>
                          ) : (
                            format(dateRange.from, "LLL dd, y")
                          )
                        ) : (
                          "Date Range"
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <CalendarComponent
                        initialFocus
                        mode="range"
                        selected={dateRange}
                        onSelect={setDateRange}
                        numberOfMonths={2}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">
                        <Checkbox
                          checked={
                            selectedApplications.length === applications.length
                          }
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedApplications(
                                applications.map((app) => app.id)
                              );
                            } else {
                              setSelectedApplications([]);
                            }
                          }}
                        />
                      </TableHead>
                      <TableHead>Student Name</TableHead>
                      <TableHead>Scholarship</TableHead>
                      <TableHead>Submitted On</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {applications.map((application) => (
                      <TableRow key={application.id}>
                        <TableCell>
                          <Checkbox
                            checked={selectedApplications.includes(application.id)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setSelectedApplications([
                                  ...selectedApplications,
                                  application.id,
                                ]);
                              } else {
                                setSelectedApplications(
                                  selectedApplications.filter(
                                    (id) => id !== application.id
                                  )
                                );
                              }
                            }}
                          />
                        </TableCell>
                        <TableCell className="font-medium">
                          {application.studentName}
                        </TableCell>
                        <TableCell>{application.scholarshipName}</TableCell>
                        <TableCell>
                          {format(application.submittedDate, "MMM dd, yyyy")}
                        </TableCell>
                        <TableCell>{getStatusBadge(application.status)}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem
                                onClick={() => setViewApplication(application)}
                              >
                                <Eye className="h-4 w-4 mr-2" />
                                View Details
                              </DropdownMenuItem>
                              {application.status === "Pending" && (
                                <>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem
                                    onClick={() =>
                                      handleAction("approve", application.id)
                                    }
                                    className="text-green-600"
                                  >
                                    <CheckCircle className="h-4 w-4 mr-2" />
                                    Approve
                                  </DropdownMenuItem>
                                  <DropdownMenuItem
                                    onClick={() =>
                                      handleAction("reject", application.id)
                                    }
                                    className="text-red-600"
                                  >
                                    <X className="h-4 w-4 mr-2" />
                                    Reject
                                  </DropdownMenuItem>
                                </>
                              )}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </motion.div>

            <Dialog
              open={!!viewApplication}
              onOpenChange={(open) => !open && setViewApplication(null)}
            >
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle>Application Details</DialogTitle>
                  <DialogDescription>
                    Review the application details and make a decision
                  </DialogDescription>
                </DialogHeader>

                <Tabs defaultValue="student-info" className="mt-4">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="student-info">
                      Student Information
                    </TabsTrigger>
                    <TabsTrigger value="academic">Academic Details</TabsTrigger>
                    <TabsTrigger value="documents">Documents</TabsTrigger>
                  </TabsList>

                  <TabsContent value="student-info" className="space-y-4">
                    {viewApplication && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">
                              {viewApplication.studentName}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            <span>{viewApplication.email}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <span>{viewApplication.phone}</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>
                              {format(viewApplication.dob, "MMMM d, yyyy")}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Home className="h-4 w-4 text-muted-foreground" />
                            <span>{viewApplication.address}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            <span>Category: {viewApplication.category}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="academic" className="space-y-4">
                    {viewApplication && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-center gap-2">
                            <School className="h-4 w-4 text-muted-foreground" />
                            <span>
                              Qualification: {viewApplication.qualification}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FileCheck className="h-4 w-4 text-muted-foreground" />
                            <span>Percentage: {viewApplication.percentage}%</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <School className="h-4 w-4 text-muted-foreground" />
                          <span>School: {viewApplication.schoolName}</span>
                        </div>
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="documents" className="space-y-4">
                    {viewApplication && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {viewApplication.documents.map((doc) => (
                          <Card key={doc.name} className="p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <FileText className="h-4 w-4 text-muted-foreground" />
                                <span>{doc.name}</span>
                              </div>
                              <Button
                                variant="outline"
                                size="sm"
                                className="gap-2"
                                asChild
                              >
                                <a href={doc.url} target="_blank" rel="noopener">
                                  <Eye className="h-4 w-4" />
                                  View
                                </a>
                              </Button>
                            </div>
                          </Card>
                        ))}
                      </div>
                    )}
                  </TabsContent>
                </Tabs>

                <div className="space-y-4 mt-6">
                  <div>
                    <label
                      htmlFor="notes"
                      className="text-sm font-medium text-gray-700"
                    >
                      Review Notes
                    </label>
                    <Textarea
                      id="notes"
                      placeholder="Add your review notes here..."
                      value={reviewNotes}
                      onChange={(e) => setReviewNotes(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>

                <DialogFooter className="gap-2">
                  {viewApplication?.status === "Pending" && (
                    <>
                      <Button
                        variant="outline"
                        onClick={() => handleAction("reject", viewApplication.id)}
                        className="gap-2 text-destructive"
                      >
                        <X className="h-4 w-4" />
                        Reject Application
                      </Button>
                      <Button
                        onClick={() => handleAction("approve", viewApplication.id)}
                        className="gap-2"
                      >
                        <CheckCircle className="h-4 w-4" />
                        Approve Application
                      </Button>
                    </>
                  )}
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <Footer />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default ReviewApplications;