import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  Mail,
  Phone,
  Calendar,
  User,
  UserCheck,
  UserX,
  Shield,
} from "lucide-react";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
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

interface User {
  id: string;
  fullName: string;
  email: string;
  role: "Student" | "Admin";
  status: "Active" | "Inactive" | "Suspended";
  phone: string;
  dob: Date;
  registrationDate: Date;
  applications: {
    total: number;
    approved: number;
    rejected: number;
    pending: number;
  };
}

const ManageUsers = () => {
  const { toast } = useToast();
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [viewUser, setViewUser] = useState<User | null>(null);
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [selectedStatus, setSelectedStatus] = useState<string>("");

  const users: User[] = [
    {
      id: "1001",
      fullName: "John Doe",
      email: "johndoe@example.com",
      role: "Student",
      status: "Active",
      phone: "+91 9876543210",
      dob: new Date("2004-01-10"),
      registrationDate: new Date("2025-02-01"),
      applications: {
        total: 3,
        approved: 1,
        rejected: 1,
        pending: 1,
      },
    },
  ];

  const handleAction = (action: "edit" | "delete" | "suspend" | "activate", userId: string) => {
    toast({
      title: `User ${action}`,
      description: `User has been ${action}ed successfully.`,
    });
  };

  const handleBulkAction = (action: "suspend" | "activate" | "delete") => {
    toast({
      title: `Bulk ${action}`,
      description: `${selectedUsers.length} users have been ${action}d.`,
    });
    setSelectedUsers([]);
  };

  const getStatusBadge = (status: User["status"]) => {
    const styles = {
      Active: "bg-green-100 text-green-800",
      Inactive: "bg-gray-100 text-gray-800",
      Suspended: "bg-red-100 text-red-800",
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
                <h1 className="text-3xl font-bold">Manage Users</h1>
                <p className="text-muted-foreground">
                  View and manage user accounts
                </p>
              </div>
              {selectedUsers.length > 0 && (
                <div className="flex gap-4 mt-4 md:mt-0">
                  <Button
                    variant="outline"
                    onClick={() => handleBulkAction("activate")}
                    className="gap-2"
                  >
                    <UserCheck className="h-4 w-4" />
                    Activate Selected
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handleBulkAction("suspend")}
                    className="gap-2"
                  >
                    <UserX className="h-4 w-4" />
                    Suspend Selected
                  </Button>
                  <Button
                    variant="outline"
                    className="gap-2 text-destructive"
                    onClick={() => handleBulkAction("delete")}
                  >
                    <Trash2 className="h-4 w-4" />
                    Delete Selected
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
                      placeholder="Search users..."
                      className="pl-9"
                    />
                  </div>
                  <Select value={selectedRole} onValueChange={setSelectedRole}>
                    <SelectTrigger>
                      <SelectValue placeholder="User Role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                    <SelectTrigger>
                      <SelectValue placeholder="Account Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                      <SelectItem value="suspended">Suspended</SelectItem>
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
                          "Registration Date"
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
                          checked={selectedUsers.length === users.length}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedUsers(users.map((user) => user.id));
                            } else {
                              setSelectedUsers([]);
                            }
                          }}
                        />
                      </TableHead>
                      <TableHead>User ID</TableHead>
                      <TableHead>Full Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <Checkbox
                            checked={selectedUsers.includes(user.id)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setSelectedUsers([...selectedUsers, user.id]);
                              } else {
                                setSelectedUsers(
                                  selectedUsers.filter((id) => id !== user.id)
                                );
                              }
                            }}
                          />
                        </TableCell>
                        <TableCell>{user.id}</TableCell>
                        <TableCell className="font-medium">{user.fullName}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={user.role === "Admin" ? "bg-purple-100 text-purple-800" : "bg-blue-100 text-blue-800"}
                          >
                            {user.role}
                          </Badge>
                        </TableCell>
                        <TableCell>{getStatusBadge(user.status)}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem onClick={() => setViewUser(user)}>
                                <Eye className="h-4 w-4 mr-2" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleAction("edit", user.id)}>
                                <Edit className="h-4 w-4 mr-2" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              {user.status === "Active" ? (
                                <DropdownMenuItem
                                  onClick={() => handleAction("suspend", user.id)}
                                  className="text-yellow-600"
                                >
                                  <UserX className="h-4 w-4 mr-2" />
                                  Suspend Account
                                </DropdownMenuItem>
                              ) : (
                                <DropdownMenuItem
                                  onClick={() => handleAction("activate", user.id)}
                                  className="text-green-600"
                                >
                                  <UserCheck className="h-4 w-4 mr-2" />
                                  Activate Account
                                </DropdownMenuItem>
                              )}
                              {user.role !== "Admin" && (
                                <>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem
                                    className="text-destructive"
                                    onClick={() => handleAction("delete", user.id)}
                                  >
                                    <Trash2 className="h-4 w-4 mr-2" />
                                    Delete Account
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
              open={!!viewUser}
              onOpenChange={(open) => !open && setViewUser(null)}
            >
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle>User Details</DialogTitle>
                  <DialogDescription>
                    View and manage user account details
                  </DialogDescription>
                </DialogHeader>

                <Tabs defaultValue="info" className="mt-4">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="info">User Information</TabsTrigger>
                    <TabsTrigger value="activity">Activity & Applications</TabsTrigger>
                  </TabsList>

                  <TabsContent value="info" className="space-y-4">
                    {viewUser && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">{viewUser.fullName}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            <span>{viewUser.email}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <span>{viewUser.phone}</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>
                              {format(viewUser.registrationDate, "MMMM d, yyyy")}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Shield className="h-4 w-4 text-muted-foreground" />
                            <span>{viewUser.role}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-muted-foreground" />
                            <span>{viewUser.status}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="activity" className="space-y-4">
                    {viewUser && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Card className="p-4">
                          <div className="text-sm text-muted-foreground mb-1">Total Applications</div>
                          <div className="text-2xl font-semibold">{viewUser.applications.total}</div>
                        </Card>
                        <Card className="p-4">
                          <div className="text-sm text-muted-foreground mb-1">Approved</div>
                          <div className="text-2xl font-semibold text-green-600">
                            {viewUser.applications.approved}
                          </div>
                        </Card>
                        <Card className="p-4">
                          <div className="text-sm text-muted-foreground mb-1">Rejected</div>
                          <div className="text-2xl font-semibold text-red-600">
                            {viewUser.applications.rejected}
                          </div>
                        </Card>
                        <Card className="p-4">
                          <div className="text-sm text-muted-foreground mb-1">Pending</div>
                          <div className="text-2xl font-semibold text-yellow-600">
                            {viewUser.applications.pending}
                          </div>
                        </Card>
                      </div>
                    )}
                  </TabsContent>
                </Tabs>

                <DialogFooter className="gap-2">
                  {viewUser?.role !== "Admin" && (
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="outline" className="gap-2 text-destructive">
                          <Trash2 className="h-4 w-4" />
                          Delete Account
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete the user
                            account and remove all associated data.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => {
                              handleAction("delete", viewUser?.id || "");
                              setViewUser(null);
                            }}
                            className="bg-destructive hover:bg-destructive/90"
                          >
                            Delete Account
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  )}
                  {viewUser?.status === "Active" ? (
                    <Button
                      variant="outline"
                      onClick={() => handleAction("suspend", viewUser.id)}
                      className="gap-2"
                    >
                      <UserX className="h-4 w-4" />
                      Suspend Account
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      onClick={() => handleAction("activate", viewUser?.id || "")}
                      className="gap-2"
                    >
                      <UserCheck className="h-4 w-4" />
                      Activate Account
                    </Button>
                  )}
                  <Button
                    onClick={() => handleAction("edit", viewUser?.id || "")}
                    className="gap-2"
                  >
                    <Edit className="h-4 w-4" />
                    Edit Details
                  </Button>
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

export default ManageUsers;