import { useState } from "react";
import { motion } from "framer-motion";
import { Settings as SettingsIcon, Eye, EyeOff } from "lucide-react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { useToast } from "@/hooks/use-toast";
import Footer from "@/components/Footer";

const Settings = () => {
  const { toast } = useToast();
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const handleSave = () => {
    toast({
      title: "Settings Updated",
      description: "Your settings have been successfully saved.",
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
              className="mb-8"
            >
              <div className="flex items-center mb-6">
                <SettingsIcon className="h-8 w-8 text-primary mr-3" />
                <h1 className="text-3xl font-bold">Admin Settings</h1>
              </div>
              <p className="text-gray-600">
                Manage your admin account settings and preferences
              </p>
            </motion.div>

            <div className="space-y-6 max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-6">
                      Admin Profile
                    </h2>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="adminName">Full Name</Label>
                          <Input id="adminName" defaultValue="Admin User" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="adminEmail">Email</Label>
                          <Input
                            id="adminEmail"
                            type="email"
                            defaultValue="admin@example.com"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="adminPhone">Phone Number</Label>
                          <Input
                            id="adminPhone"
                            type="tel"
                            defaultValue="+1 (555) 123-4567"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="adminRole">Admin Role</Label>
                          <Select defaultValue="super">
                            <SelectTrigger>
                              <SelectValue placeholder="Select admin role" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="super">Super Admin</SelectItem>
                              <SelectItem value="regular">
                                Regular Admin
                              </SelectItem>
                              <SelectItem value="moderator">
                                Moderator
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-6">Security</h2>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="currentPassword">
                            Current Password
                          </Label>
                          <div className="relative">
                            <Input
                              id="currentPassword"
                              type={showCurrentPassword ? "text" : "password"}
                            />
                            <Button
                              variant="ghost"
                              size="icon"
                              className="absolute right-0 top-0"
                              onClick={() =>
                                setShowCurrentPassword(!showCurrentPassword)
                              }
                            >
                              {showCurrentPassword ? (
                                <EyeOff className="h-4 w-4" />
                              ) : (
                                <Eye className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="newPassword">New Password</Label>
                          <div className="relative">
                            <Input
                              id="newPassword"
                              type={showNewPassword ? "text" : "password"}
                            />
                            <Button
                              variant="ghost"
                              size="icon"
                              className="absolute right-0 top-0"
                              onClick={() =>
                                setShowNewPassword(!showNewPassword)
                              }
                            >
                              {showNewPassword ? (
                                <EyeOff className="h-4 w-4" />
                              ) : (
                                <Eye className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="twoFactor">
                          Two-Factor Authentication
                        </Label>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <div>Enhance your account security</div>
                            <div className="text-sm text-muted-foreground">
                              Requires verification code when signing in
                            </div>
                          </div>
                          <Switch id="twoFactor" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-6">
                      Email Preferences
                    </h2>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-base">
                            New Application Notifications
                          </Label>
                          <p className="text-sm text-gray-600">
                            Receive notifications for new scholarship
                            applications
                          </p>
                        </div>
                        <Select defaultValue="immediate">
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select frequency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="immediate">Immediate</SelectItem>
                            <SelectItem value="daily">Daily Digest</SelectItem>
                            <SelectItem value="weekly">
                              Weekly Summary
                            </SelectItem>
                            <SelectItem value="none">Don't send</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-base">
                            System Alert Notifications
                          </Label>
                          <p className="text-sm text-gray-600">
                            Get notified about important system updates and
                            issues
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-6">
                      System Preferences
                    </h2>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-base">
                            Automatic Application Review
                          </Label>
                          <p className="text-sm text-gray-600">
                            Enable AI-assisted preliminary application review
                          </p>
                        </div>
                        <Switch />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-base">Audit Logging</Label>
                          <p className="text-sm text-gray-600">
                            Track all administrative actions in system logs
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <div className="flex justify-end space-x-4">
                <Button variant="outline">Cancel</Button>
                <Button onClick={handleSave}>Save Changes</Button>
              </div>
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Settings;
