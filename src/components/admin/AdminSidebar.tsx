
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Award,
  FileText,
  Users,
  Settings,
  LogOut,
  PlusCircle,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const AdminSidebar = () => {
  const location = useLocation();

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/admin/dashboard" },
    { icon: Award, label: "Manage Scholarships", path: "/admin/dashboard/scholarships" },
    { icon: PlusCircle, label: "Add Scholarship", path: "/admin/add-scholarship" },
    { icon: FileText, label: "Review Applications", path: "/admin/dashboard/applications" },
    { icon: Users, label: "Manage Users", path: "/admin/dashboard/users" },
    { icon: Settings, label: "Settings", path: "/admin/dashboard/settings" },
  ];

  const handleLogout = () => {
    // Implement logout logic here
  };

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center space-x-4 mb-6">
          <Avatar className="h-12 w-12">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">Admin User</h3>
            <p className="text-sm text-gray-500">admin@example.com</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.path}>
              <SidebarMenuButton
                asChild
                className={location.pathname === item.path ? "bg-primary/10 text-primary" : ""}
              >
                <Link to={item.path} className="flex items-center space-x-2">
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          <SidebarMenuItem>
            <Button
              variant="ghost"
              className="w-full justify-start space-x-2 px-2 hover:bg-destructive/10 hover:text-destructive"
              onClick={handleLogout}
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};

export default AdminSidebar;