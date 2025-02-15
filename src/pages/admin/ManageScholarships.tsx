
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Search,
  Filter,
  Download,
  PlusCircle,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  Mail,
  CheckCircle,
} from "lucide-react";
import { format } from "date-fns";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import AdminSidebar from "@/components/admin/AdminSidebar";
import Footer from "@/components/Footer";

const ManageScholarships = () => {
  const { toast } = useToast();
  const [selectedScholarships, setSelectedScholarships] = useState<string[]>([]);
  const [dateRange, setDateRange] = useState<DateRange | undefined>();

  const scholarships = [
    {
      id: "1",
      name: "XYZ Merit Scholarship",
      provider: "ABC Foundation",
      type: "Merit-Based",
      deadline: new Date("2025-03-10"),
      status: "Published",
    },
    {
      id: "2",
      name: "ABC Need-Based Grant",
      provider: "Govt. of India",
      type: "Need-Based",
      deadline: new Date("2025-04-05"),
      status: "Draft",
    },
    {
      id: "3",
      name: "Sports Excellence Fund",
      provider: "Sports Ministry",
      type: "Sports",
      deadline: new Date("2025-05-15"),
      status: "Expired",
    },
  ];

  const handleAction = (action: string, scholarship: string) => {
    toast({
      title: `${action} - ${scholarship}`,
      description: `${action} action triggered for ${scholarship}`,
    });
  };

  const handleBulkAction = (action: string) => {
    toast({
      title: `Bulk ${action}`,
      description: `${action} action triggered for ${selectedScholarships.length} scholarships`,
    });
    setSelectedScholarships([]);
  };

  const handleSelectAll = () => {
    if (selectedScholarships.length === scholarships.length) {
      setSelectedScholarships([]);
    } else {
      setSelectedScholarships(scholarships.map((s) => s.id));
    }
  };

  const handleExportData = () => {
    toast({
      title: "Exporting Data",
      description: "Your scholarship data is being downloaded as CSV",
    });
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AdminSidebar />
        <main className="flex-1 bg-gray-50">
          <div className="p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
            >
              <div>
                <h1 className="text-3xl font-bold">Manage Scholarships</h1>
                <p className="text-muted-foreground">Manage and monitor all scholarship opportunities</p>
              </div>
              <div className="flex gap-4 mt-4 md:mt-0">
                <Button onClick={handleExportData} variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  Export Data
                </Button>
                <Button asChild className="gap-2">
                  <Link to="/admin/add-scholarship">
                    <PlusCircle className="h-4 w-4" />
                    Add New Scholarship
                  </Link>
                </Button>
              </div>
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
                      placeholder="Search scholarships..."
                      className="pl-9"
                    />
                  </div>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Scholarship Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="merit">Merit-Based</SelectItem>
                      <SelectItem value="need">Need-Based</SelectItem>
                      <SelectItem value="sports">Sports</SelectItem>
                    </SelectContent>
                  </Select>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start">
                        <Filter className="mr-2 h-4 w-4" />
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
                          "Deadline Range"
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        initialFocus
                        mode="range"
                        selected={dateRange}
                        onSelect={setDateRange}
                        numberOfMonths={2}
                      />
                    </PopoverContent>
                  </Popover>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="published">Published</SelectItem>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="expired">Expired</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <Card>
                <div className="p-4 border-b">
                  {selectedScholarships.length > 0 && (
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">
                        {selectedScholarships.length} selected
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleBulkAction("publish")}
                      >
                        Publish Selected
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-destructive"
                        onClick={() => handleBulkAction("delete")}
                      >
                        Delete Selected
                      </Button>
                    </div>
                  )}
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">
                        <Checkbox
                          checked={selectedScholarships.length === scholarships.length}
                          onCheckedChange={handleSelectAll}
                        />
                      </TableHead>
                      <TableHead>Scholarship Name</TableHead>
                      <TableHead>Provider</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Deadline</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {scholarships.map((scholarship) => (
                      <TableRow key={scholarship.id}>
                        <TableCell>
                          <Checkbox
                            checked={selectedScholarships.includes(scholarship.id)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setSelectedScholarships([...selectedScholarships, scholarship.id]);
                              } else {
                                setSelectedScholarships(
                                  selectedScholarships.filter((id) => id !== scholarship.id)
                                );
                              }
                            }}
                          />
                        </TableCell>
                        <TableCell className="font-medium">{scholarship.name}</TableCell>
                        <TableCell>{scholarship.provider}</TableCell>
                        <TableCell>{scholarship.type}</TableCell>
                        <TableCell>{format(scholarship.deadline, "MMM dd, yyyy")}</TableCell>
                        <TableCell>
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              scholarship.status === "Published"
                                ? "bg-green-100 text-green-800"
                                : scholarship.status === "Draft"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {scholarship.status}
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem onClick={() => handleAction("View", scholarship.name)}>
                                <Eye className="h-4 w-4 mr-2" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleAction("Edit", scholarship.name)}>
                                <Edit className="h-4 w-4 mr-2" />
                                Edit
                              </DropdownMenuItem>
                              {scholarship.status === "Draft" && (
                                <DropdownMenuItem
                                  onClick={() => handleAction("Publish", scholarship.name)}
                                >
                                  <CheckCircle className="h-4 w-4 mr-2" />
                                  Publish
                                </DropdownMenuItem>
                              )}
                              <DropdownMenuSeparator />
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
              </Card>
            </motion.div>

            <Footer/>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default ManageScholarships;