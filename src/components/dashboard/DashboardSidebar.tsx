import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  Search,
  Bookmark,
  FileText,
  Settings,
  LogOut,
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

const DashboardSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { icon: Home, label: "Dashboard", path: "/dashboard" },
    { icon: Search, label: "Find Scholarships", path: "/scholarships" },
    { icon: Bookmark, label: "Saved Scholarships", path: "/dashboard/saved" },
    {
      icon: FileText,
      label: "My Applications",
      path: "/dashboard/applications",
    },
    { icon: Settings, label: "Settings", path: "/dashboard/settings" },
  ];

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center space-x-4 mb-6">
          <Avatar className="h-12 w-12">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">John Doe</h3>
            <p className="text-sm text-gray-500">john@example.com</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.path}>
              <SidebarMenuButton
                asChild
                className={
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : ""
                }
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

export default DashboardSidebar;
