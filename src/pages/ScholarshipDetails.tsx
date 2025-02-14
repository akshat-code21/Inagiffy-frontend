import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Award,
  Calendar,
  CheckCircle2,
  FileText,
  Gift,
  HelpCircle,
  ListChecks,
  Mail,
  School,
  Timer,
  BadgeCheck,
  Bookmark,
  ArrowUpRight,
  Clock,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useToast } from "@/hooks/use-toast";
import Footer from "@/components/Footer";

const ScholarshipDetails = () => {
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Scholarship Saved",
      description: "This scholarship has been added to your saved list.",
    });
  };

  const relatedScholarships = [
    {
      name: "Engineering Excellence Award",
      amount: "₹40,000",
      deadline: "April 15, 2025",
      tags: ["Engineering", "Merit-Based"],
    },
    {
      name: "Future Tech Leaders Grant",
      amount: "₹35,000",
      deadline: "May 1, 2025",
      tags: ["Technology", "Leadership"],
    },
    {
      name: "Women in STEM Scholarship",
      amount: "₹45,000",
      deadline: "April 30, 2025",
      tags: ["STEM", "Women"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Award className="h-6 w-6 text-primary" />
            <span className="font-semibold">ScholarshipPortal</span>
          </Link>
          <div className="flex-1" />
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/">Home</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/scholarships">Find Scholarships</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/dashboard/saved">Saved</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/profile">Profile</Link>
            </Button>
          </div>
        </div>
      </nav>

      <main className="container py-8">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link to="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link to="/scholarships">Scholarships</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>XYZ Merit-Based Scholarship 2025</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Merit-Based", "Engineering", "State-Level"].map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <CardTitle className="text-2xl mb-2">
                    XYZ Merit-Based Scholarship 2025
                  </CardTitle>
                  <div className="space-y-2">
                    <p className="text-muted-foreground flex items-center">
                      <School className="h-4 w-4 mr-2" />
                      ABC Foundation
                    </p>
                    <p className="text-xl font-bold text-primary">
                      ₹50,000 per year + Mentorship
                    </p>
                    <p className="text-red-600 flex items-center">
                      <Timer className="h-4 w-4 mr-2" />
                      Application Deadline: March 31, 2025
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4">
                    <Button className="flex-1 sm:flex-none gap-2">
                      Apply Now
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="flex-1 sm:flex-none gap-2" onClick={handleSave}>
                      <Bookmark className="h-4 w-4" />
                      Save Scholarship
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="eligibility" className="bg-white rounded-lg border">
                  <AccordionTrigger className="px-6">
                    <div className="flex items-center gap-2">
                      <ListChecks className="h-5 w-5" />
                      <span>Eligibility Criteria</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 space-y-4">
                    <div className="space-y-2">
                      {[
                        "Minimum 80% in 12th grade",
                        "Annual family income below ₹5 lakh",
                        "SC/ST/OBC students eligible",
                        "Only for students from Maharashtra",
                      ].map((criterion, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>{criterion}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="benefits" className="bg-white rounded-lg border">
                  <AccordionTrigger className="px-6">
                    <div className="flex items-center gap-2">
                      <Gift className="h-5 w-5" />
                      <span>Scholarship Benefits</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="space-y-4">
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Monetary Grant</h4>
                        <p>₹50,000 annually for 4 years</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Additional Benefits</h4>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          <li>Free study materials</li>
                          <li>Mentorship programs</li>
                          <li>Networking opportunities</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="process" className="bg-white rounded-lg border">
                  <AccordionTrigger className="px-6">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      <span>Application Process</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="space-y-4">
                      {[
                        "Fill the online application form",
                        "Upload required documents",
                        "Submit before the deadline",
                        "Shortlisted candidates will be notified via email",
                      ].map((step, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <p>{step}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="documents" className="bg-white rounded-lg border">
                  <AccordionTrigger className="px-6">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      <span>Required Documents</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <ul className="space-y-2">
                      {[
                        "Aadhaar Card",
                        "12th Grade Marksheet",
                        "Income Certificate",
                        "Caste Certificate (If applicable)",
                      ].map((doc, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <BadgeCheck className="h-4 w-4 text-primary" />
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faqs" className="bg-white rounded-lg border">
                  <AccordionTrigger className="px-6">
                    <div className="flex items-center gap-2">
                      <HelpCircle className="h-5 w-5" />
                      <span>FAQs & Support</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="space-y-4">
                      <div className="space-y-4">
                        {[
                          {
                            q: "Can I apply if I am in my final year?",
                            a: "Yes, final year students are eligible to apply.",
                          },
                          {
                            q: "How will I receive the scholarship money?",
                            a: "The amount will be directly transferred to your bank account.",
                          },
                          {
                            q: "When will the results be announced?",
                            a: "Results will be announced within 45 days of the application deadline.",
                          },
                        ].map((faq, index) => (
                          <div key={index} className="space-y-2">
                            <p className="font-medium flex items-center gap-2">
                              <HelpCircle className="h-4 w-4 text-primary" />
                              {faq.q}
                            </p>
                            <p className="text-muted-foreground pl-6">{faq.a}</p>
                          </div>
                        ))}
                      </div>
                      <div className="pt-4 border-t">
                        <p className="flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          Need help? Contact{" "}
                          <a
                            href="mailto:support@scholarshipportal.com"
                            className="text-primary hover:underline"
                          >
                            support@scholarshipportal.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Similar Scholarships</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {relatedScholarships.map((scholarship, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardContent className="p-4">
                        <div className="space-y-2">
                          <div className="flex flex-wrap gap-1">
                            {scholarship.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <h4 className="font-medium line-clamp-1">{scholarship.name}</h4>
                          <p className="text-primary font-semibold">{scholarship.amount}</p>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="h-4 w-4 mr-1" />
                            Deadline: {scholarship.deadline}
                          </div>
                          <Button variant="outline" className="w-full mt-2" asChild>
                            <Link to={`/scholarships/${index + 1}`}>
                              View Details
                              <ExternalLink className="h-4 w-4 ml-2" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            <div className="sticky top-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Card>
                  <CardContent className="p-4">
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Application Deadline</p>
                        <p className="font-medium flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          March 31, 2025
                        </p>
                      </div>
                      <Button className="w-full gap-2">
                        Apply Now
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ScholarshipDetails;