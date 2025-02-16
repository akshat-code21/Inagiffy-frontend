import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../../../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useToast } from "@/hooks/use-toast";
import { jwtDecode } from "jwt-decode";

interface AdminProtectedRouteProps {
  children: React.ReactNode;
}

interface DecodedToken {
  userId: string;
  role: string;
}

const AdminProtectedRoute = ({ children }: AdminProtectedRouteProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Check if user has admin token and role
        const adminToken = localStorage.getItem("adminToken");
        if (adminToken) {
          try {
            const decoded = jwtDecode<DecodedToken>(adminToken);
            setIsAuthenticated(decoded.role === 'ADMIN');
            
            if (decoded.role !== 'ADMIN') {
              toast({
                variant: "destructive",
                title: "Admin access required",
                description: "Please log in as an administrator",
              });
            }
          } catch (error) {
            setIsAuthenticated(false);
          }
        } else {
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe();
  }, [toast]);

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default AdminProtectedRoute; 