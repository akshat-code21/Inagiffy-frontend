import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowRight, Lock, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

type LoginForm = z.infer<typeof loginSchema>;

const Login = () => {
  const { toast } = useToast();
  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginForm) => {
    try {
      console.log("Form submitted:", data);
      toast({
        title: "Welcome back!",
        description: "Successfully logged in to Smart Scholarship Hub",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Login failed",
        description: "Incorrect email or password",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="lg:w-1/2 bg-primary/5 p-8 lg:p-16 flex flex-col justify-center"
      >
        <div className="max-w-lg mx-auto lg:mx-0">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Access Your Scholarships Instantly!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Log in to track your applications and explore new opportunities.
          </p>
          <img
            src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80"
            alt="Student with laptop"
            className="rounded-2xl shadow-xl"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center"
      >
        <div className="max-w-md mx-auto w-full">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Welcome Back!
            </h2>
            <p className="text-gray-600">
              Enter your credentials to access your account
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        <Input
                          placeholder="you@example.com"
                          type="email"
                          className="pl-10"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel>Password</FormLabel>
                      <Link
                        to="/forgot-password"
                        className="text-sm text-primary hover:underline"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <FormControl>
                      <div className="relative">
                        <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        <Input
                          placeholder="••••••••"
                          type="password"
                          className="pl-10"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" size="lg">
                Log In
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => {
                  console.log("Google login clicked");
                }}
              >
                <img
                  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                  alt="Google"
                  className="w-5 h-5 mr-2"
                />
                Continue with Google
              </Button>

              <p className="text-center text-sm text-gray-600">
                New to the platform?{" "}
                <Link
                  to="/signup"
                  className="text-primary hover:underline font-semibold"
                >
                  Sign up here
                </Link>
              </p>

              <div className="pt-6 text-center text-xs text-gray-500">
                <p>
                  By continuing, you agree to our{" "}
                  <Link to="/terms" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </p>
                <p className="mt-2">
                  Need help?{" "}
                  <Link to="/support" className="text-primary hover:underline">
                    Contact Support
                  </Link>
                </p>
              </div>
            </form>
          </Form>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
