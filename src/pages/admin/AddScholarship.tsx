
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Calendar as CalendarIcon, Mail, Book, Save, Send } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import AdminSidebar from "@/components/admin/AdminSidebar";
import Footer from "@/components/Footer";

const formSchema = z.object({
  name: z.string().min(1, "Scholarship name is required"),
  organization: z.string().min(1, "Organization name is required"),
  description: z.string().max(200, "Description must be less than 200 characters"),
  type: z.string().min(1, "Scholarship type is required"),
  deadline: z.date(),
  academicRequirement: z.string(),
  incomeLimit: z.string().optional(),
  category: z.string().optional(),
  states: z.array(z.string()).optional(),
  amount: z.string().min(1, "Amount is required"),
  benefits: z.string(),
  instructions: z.string(),
  applicationLink: z.string().url("Invalid URL"),
  documents: z.array(z.string()),
  supportEmail: z.string().email("Invalid email address"),
  helplineNumber: z.string(),
});

const AddScholarship = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
      benefits: "",
      instructions: "",
      documents: [],
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>, isDraft: boolean) => {
    toast({
      title: isDraft ? "Scholarship Saved as Draft" : "Scholarship Published",
      description: isDraft
        ? "Your scholarship has been saved as a draft."
        : "Your scholarship has been published successfully.",
    });
    console.log(data);
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AdminSidebar />
        <main className="flex-1 bg-gray-50">
          <div className="container mx-auto p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <h1 className="text-3xl font-bold">Add New Scholarship</h1>
                <p className="text-muted-foreground">Create a new scholarship opportunity</p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit((data) => onSubmit(data, false))}>
                  <div className="space-y-8">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Book className="h-5 w-5" />
                          Scholarship Details
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Scholarship Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter scholarship name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="organization"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Organization/Provider</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter organization name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="description"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Short Description</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Brief description of the scholarship"
                                  className="resize-none"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
                                Maximum 200 characters
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="type"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Scholarship Type</FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select type" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="merit">Merit-Based</SelectItem>
                                    <SelectItem value="need">Need-Based</SelectItem>
                                    <SelectItem value="sports">Sports</SelectItem>
                                    <SelectItem value="research">Research</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="deadline"
                            render={({ field }) => (
                              <FormItem className="flex flex-col">
                                <FormLabel>Application Deadline</FormLabel>
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <FormControl>
                                      <Button
                                        variant={"outline"}
                                        className={cn(
                                          "w-full pl-3 text-left font-normal",
                                          !field.value && "text-muted-foreground"
                                        )}
                                      >
                                        {field.value ? (
                                          format(field.value, "PPP")
                                        ) : (
                                          <span>Pick a date</span>
                                        )}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                      </Button>
                                    </FormControl>
                                  </PopoverTrigger>
                                  <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                      mode="single"
                                      selected={field.value}
                                      onSelect={field.onChange}
                                      initialFocus
                                    />
                                  </PopoverContent>
                                </Popover>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Mail className="h-5 w-5" />
                          Contact & Support
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="supportEmail"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Support Email</FormLabel>
                                <FormControl>
                                  <Input
                                    type="email"
                                    placeholder="support@example.com"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="helplineNumber"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Helpline Number</FormLabel>
                                <FormControl>
                                  <Input
                                    type="tel"
                                    placeholder="Enter helpline number"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </CardContent>
                    </Card>

                    <div className="flex justify-end space-x-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => onSubmit(form.getValues(), true)}
                        className="gap-2"
                      >
                        <Save className="h-4 w-4" />
                        Save as Draft
                      </Button>
                      <Button type="submit" className="gap-2">
                        <Send className="h-4 w-4" />
                        Publish Scholarship
                      </Button>
                    </div>
                  </div>
                </form>
              </Form>
            </motion.div>

            <Footer/>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AddScholarship;