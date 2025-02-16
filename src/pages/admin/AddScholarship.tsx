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
import { useAppDispatch } from "@/hooks/redux";
import { createScholarship } from "@/redux/features/scholarship/scholarshipThunks";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  amount: z.number().min(0, "Amount must be positive"),
  deadline: z.date(),
  category: z.enum(["GOVERNMENT", "PRIVATE", "STATE"]),
  institution: z.string().min(1, "Institution is required"),
  applyLink: z.string().url("Must be a valid URL"),
  eligibility: z.object({
    requirements: z.array(z.string()),
    minGPA: z.number().min(0),
    yearLevels: z.array(z.string())
  })
});

const AddScholarship = () => {
  const dispatch = useAppDispatch();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [date, setDate] = useState<Date>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      amount: 0,
      deadline: new Date(),
      category: "GOVERNMENT",
      institution: "",
      applyLink: "",
      eligibility: {
        requirements: [],
        minGPA: 0,
        yearLevels: []
      }
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>, isDraft: boolean) => {
    try {
      console.log("Form Data:", data);
      console.log("Submitting:", {
        name: data.name,
        description: data.description,
        amount: data.amount,
        deadline: data.deadline,
        category: data.category,
        eligibility: data.eligibility,
        institution: data.institution,
        applyLink: data.applyLink,
        isDraft,
      });

      await dispatch(createScholarship({
        name: data.name,
        description: data.description,
        amount: data.amount,
        deadline: data.deadline,
        category: data.category,
        eligibility: data.eligibility,
        institution: data.institution,
        applyLink: data.applyLink,
        isDraft,
      })).unwrap();

      toast({
        title: isDraft ? "Scholarship Saved as Draft" : "Scholarship Published",
        description: isDraft
          ? "Your scholarship has been saved as a draft."
          : "Your scholarship has been published successfully.",
      });

      navigate("/admin/scholarships");
    } catch (error: any) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to create scholarship",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async (isDraft: boolean) => {
    console.log("handleSubmit called", isDraft);
    const data = form.getValues();
    await onSubmit(data, isDraft);
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
                <form onSubmit={(e) => {
                  e.preventDefault();
                  console.log("Form submitted");
                  handleSubmit(false);
                }}>
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
                          name="institution"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Institution</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter institution name" {...field} />
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

                        <FormField
                          control={form.control}
                          name="category"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Category</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select category" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="GOVERNMENT">Government</SelectItem>
                                  <SelectItem value="PRIVATE">Private</SelectItem>
                                  <SelectItem value="STATE">State</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="amount"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Scholarship Amount</FormLabel>
                              <FormControl>
                                <Input 
                                  type="number" 
                                  placeholder="Enter scholarship amount"
                                  {...field}
                                  onChange={e => field.onChange(parseFloat(e.target.value))}
                                />
                              </FormControl>
                              <FormDescription>
                                Enter amount in USD
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                          format(new Date(field.value), "PPP")
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
                                      selected={field.value ? new Date(field.value) : undefined}
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
                        <CardTitle>Eligibility Details</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <FormField
                          control={form.control}
                          name="eligibility.requirements"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Requirements</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Enter requirements (one per line)"
                                  onChange={e => field.onChange(e.target.value.split('\n').filter(Boolean))}
                                  value={field.value?.join('\n') || ''}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="eligibility.minGPA"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Minimum GPA</FormLabel>
                              <FormControl>
                                <Input 
                                  type="number" 
                                  step="0.1" 
                                  placeholder="Enter minimum GPA"
                                  {...field}
                                  onChange={e => field.onChange(parseFloat(e.target.value))}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="eligibility.yearLevels"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Year Levels</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Enter year levels (comma-separated)"
                                  onChange={e => field.onChange(e.target.value.split(',').map(s => s.trim()))}
                                  value={field.value?.join(', ') || ''}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
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
                        <FormField
                          control={form.control}
                          name="applyLink"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Application Link</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter application URL" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </CardContent>
                    </Card>

                    <div className="flex justify-end space-x-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => handleSubmit(true)}
                        className="gap-2"
                      >
                        <Save className="h-4 w-4" />
                        Save as Draft
                      </Button>
                      <Button 
                        type="submit" 
                        className="gap-2"
                        onClick={() => console.log("Publish button clicked")}
                      >
                        <Send className="h-4 w-4" />
                        Publish Scholarship
                      </Button>
                    </div>
                  </div>
                </form>
              </Form>
            </motion.div>

          </div>
            <Footer/>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AddScholarship;