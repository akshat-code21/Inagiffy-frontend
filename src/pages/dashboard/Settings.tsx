import { motion } from "framer-motion";
import { Settings as SettingsIcon } from "lucide-react";
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
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import Footer from "@/components/Footer";

const Settings = () => {
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
                <SettingsIcon className="h-8 w-8 text-primary mr-3" />
                <h1 className="text-3xl font-bold">Settings & Profile</h1>
              </div>
              <p className="text-gray-600">
                Manage your account settings and preferences
              </p>
            </motion.div>

            <div className="space-y-6 max-w-4xl">
              {/* Profile Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-6">Profile Information</h2>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name</Label>
                          <Input id="fullName" defaultValue="John Doe" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" defaultValue="john@example.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="dateOfBirth">Date of Birth</Label>
                          <Input id="dateOfBirth" type="date" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Academic Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-6">Academic Information</h2>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="educationLevel">Education Level</Label>
                          <Select defaultValue="undergraduate">
                            <SelectTrigger>
                              <SelectValue placeholder="Select education level" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="highschool">High School</SelectItem>
                              <SelectItem value="undergraduate">Undergraduate</SelectItem>
                              <SelectItem value="graduate">Graduate</SelectItem>
                              <SelectItem value="phd">Ph.D.</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="major">Major/Field of Study</Label>
                          <Input id="major" defaultValue="Computer Science" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="gpa">GPA</Label>
                          <Input id="gpa" type="number" step="0.01" min="0" max="4" defaultValue="3.8" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="graduationYear">Expected Graduation Year</Label>
                          <Input id="graduationYear" type="number" min="2024" defaultValue="2025" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Notification Preferences */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-6">Notification Preferences</h2>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-base">Email Notifications</Label>
                          <p className="text-sm text-gray-600">
                            Receive updates about new scholarships and deadlines
                          </p>
                        </div>
                        <Select defaultValue="daily">
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select frequency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="daily">Daily Digest</SelectItem>
                            <SelectItem value="weekly">Weekly Summary</SelectItem>
                            <SelectItem value="none">Don't send</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-base">Application Reminders</Label>
                          <p className="text-sm text-gray-600">
                            Get reminded about upcoming deadlines
                          </p>
                        </div>
                        <Select defaultValue="3days">
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select reminder time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1day">1 day before</SelectItem>
                            <SelectItem value="3days">3 days before</SelectItem>
                            <SelectItem value="1week">1 week before</SelectItem>
                            <SelectItem value="none">Don't remind</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <div className="flex justify-end space-x-4">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
              </div>
            </div>
          </div>
          <Footer/>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Settings;