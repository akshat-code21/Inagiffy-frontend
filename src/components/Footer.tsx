import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-white border-t mt-8 py-6">
            <div className="container mx-auto px-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex space-x-4 mb-4 md:mb-0">
                  <Link to="/" className="text-gray-600 hover:text-primary">
                    Home
                  </Link>
                  <Link
                    to="/scholarships"
                    className="text-gray-600 hover:text-primary"
                  >
                    Scholarships
                  </Link>
                  <Link
                    to="/support"
                    className="text-gray-600 hover:text-primary"
                  >
                    Support
                  </Link>
                </div>
                <div className="text-gray-600 text-sm">
                  Need help? Contact us at{" "}
                  <a
                    href="mailto:support@scholarshiphub.com"
                    className="text-primary hover:underline"
                  >
                    support@scholarshiphub.com
                  </a>
                </div>
              </div>
            </div>
          </footer>
    )
}