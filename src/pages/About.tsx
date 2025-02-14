import { motion } from "framer-motion";
import {
  ArrowRight,
  Search,
  CheckCircle,
  Award,
  Sparkles,
  Mail,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const features = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "AI-Powered Matching",
      description:
        "Our smart algorithm finds the perfect scholarships based on your background and qualifications.",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Verified Opportunities",
      description:
        "Every scholarship is thoroughly vetted to ensure authenticity and reliability.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Easy Tracking",
      description:
        "Bookmark and track your applications in one convenient dashboard.",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Free to Use",
      description:
        "No hidden costs or premium features. Everything is free for students, forever.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Sign Up & Complete Profile",
      description:
        "Create your account and tell us about your academic background.",
    },
    {
      number: "02",
      title: "Search & Discover",
      description:
        "Browse through AI-recommended scholarships matching your profile.",
    },
    {
      number: "03",
      title: "Save & Apply",
      description:
        "Bookmark interesting opportunities and start your applications.",
    },
    {
      number: "04",
      title: "Track Progress",
      description: "Monitor your applications and get updates on deadlines.",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      linkedin: "#",
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      linkedin: "#",
    },
  ];

  const testimonials = [
    {
      quote:
        "This platform helped me find and secure a full scholarship for my undergraduate studies. The AI matching is incredibly accurate!",
      author: "Emily Rodriguez",
      role: "Computer Science Student",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
      quote:
        "I was amazed by how easy it was to find scholarships that matched my unique background and interests. Highly recommended!",
      author: "James Wilson",
      role: "Medical Student",
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center -mx-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0"
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Empowering Students with the Right Scholarships!
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                We leverage AI to connect students with scholarships that match
                their background, ensuring equal opportunities for all.
              </p>
              <Button asChild size="lg">
                <Link to="/scholarships">
                  Explore Scholarships
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-1/2 px-4"
            >
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt="Students celebrating"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600">
              We believe that every student deserves access to quality
              education, regardless of their financial background. Our mission
              is to leverage cutting-edge AI technology to democratize access to
              scholarships, making it easier for students to find and secure the
              funding they need for their education.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Our simple four-step process makes finding and applying for
              scholarships easier than ever
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative p-6 bg-white rounded-xl shadow-sm"
              >
                <span className="absolute -top-4 left-6 inline-block px-3 py-1 text-xs font-semibold text-white bg-primary rounded-full">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600">
              Our platform offers unique features designed to make your
              scholarship search successful
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-gray-50 rounded-xl"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-6 bg-primary/10 text-primary rounded-xl">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet the Team
            </h2>
            <p className="text-lg text-gray-600">
              The passionate individuals behind our mission
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-sm"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{member.role}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-hover"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Student Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Hear from students who found their perfect scholarships
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-gray-50 rounded-xl"
              >
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Have questions? We'd love to hear from you.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="mailto:support@scholarshiphub.com"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
