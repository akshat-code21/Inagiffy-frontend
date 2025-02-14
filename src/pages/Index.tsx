
import { Search, BookmarkCheck, Award, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  const features = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Smart Scholarship Search",
      description: "AI-powered, personalized recommendations based on your profile and preferences",
    },
    {
      icon: <BookmarkCheck className="w-6 h-6" />,
      title: "Verified Scholarships",
      description: "Every scholarship is thoroughly verified and updated regularly",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Save & Track Applications",
      description: "Keep track of your applications and never miss important deadlines",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Easy to Use",
      description: "Intuitive interface designed for the best user experience",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Sign Up & Complete Your Profile",
      description: "Create your account and tell us about your academic background",
    },
    {
      number: "02",
      title: "Search & Discover Scholarships",
      description: "Browse through AI-recommended scholarships matching your profile",
    },
    {
      number: "03",
      title: "Bookmark & Apply",
      description: "Save interesting scholarships and start your applications",
    },
    {
      number: "04",
      title: "Track Your Applications",
      description: "Monitor your application status and never miss deadlines",
    },
  ];

  const faqs = [
    {
      question: "How does the AI-powered search work?",
      answer: "Our AI system analyzes your profile, including your academic background, interests, and eligibility criteria, to match you with the most relevant scholarships. It continuously learns from user interactions to improve recommendations.",
    },
    {
      question: "Is this service free to use?",
      answer: "Yes! Our basic service is completely free for students. We believe in making education accessible to everyone.",
    },
    {
      question: "How often are scholarships updated?",
      answer: "Our team verifies and updates scholarship information daily to ensure you have access to the most current opportunities.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center -mx-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0"
            >
              <div className="max-w-lg">
                <span className="inline-block py-1 px-3 mb-5 text-xs font-semibold text-primary bg-primary/10 rounded-full">
                  AI-Powered Scholarship Search
                </span>
                <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-gray-900 mb-7">
                  Find the Right Scholarships for You, Instantly!
                </h1>
                <p className="text-lg text-gray-500 mb-10">
                  AI-powered search to match you with the best local, state, and government
                  scholarships based on your background.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-primary hover:bg-primary-hover rounded-lg transition duration-200"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center px-6 py-3 text-sm font-semibold text-primary hover:text-primary-hover border border-primary hover:border-primary-hover rounded-lg transition duration-200"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-1/2 px-4"
            >
              <div className="relative mx-auto md:mr-0 max-w-max">
                <motion.img
                  animate={{ y: [-10, 10] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                  className="absolute -left-14 -top-12 w-28 md:w-auto"
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639156ce1c70c97aeb755c8c_Geometry%201.svg"
                  alt=""
                />
                <motion.img
                  animate={{ y: [-10, 10] }}
                  transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse" }}
                  className="absolute -right-10 -bottom-8 w-28 md:w-auto"
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639156ce1c70c97aeb755c8c_Geometry%201.svg"
                  alt=""
                />
                <img
                  className="relative rounded-2xl shadow-xl"
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  alt="Students studying"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mb-16 text-center"
          >
            <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-primary bg-primary/10 rounded-full">
              Features
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg text-gray-500">
              Our platform provides all the tools you need to find and secure scholarships
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
                className="p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition duration-200 group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-6 bg-primary/10 text-primary rounded-xl group-hover:scale-110 transition-transform duration-200">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-500">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mb-16 text-center"
          >
            <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-primary bg-primary/10 rounded-full">
              Process
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-500">
              Find and apply for scholarships in four simple steps
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
                className="relative p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition duration-200"
              >
                <span className="absolute -top-4 left-8 inline-block px-3 py-1 text-xs font-semibold text-white bg-primary rounded-full">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-primary bg-primary/10 rounded-full">
              FAQs
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-500 mb-12">
              Find answers to common questions about our platform
            </p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-gray-50 rounded-xl"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-500">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h5>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-500 hover:text-primary transition duration-200">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-primary transition duration-200">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-primary transition duration-200">
                    Scholarships
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-primary transition duration-200">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-gray-900 mb-4">Support</h5>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-500 hover:text-primary transition duration-200">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-primary transition duration-200">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-primary transition duration-200">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2">
              <h5 className="text-lg font-semibold text-gray-900 mb-4">
                Subscribe to our newsletter
              </h5>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
                />
                <button className="px-6 py-2 text-sm font-semibold text-white bg-primary hover:bg-primary-hover rounded-lg transition duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-center text-gray-500">
              © 2024 Smart Scholarship Hub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;