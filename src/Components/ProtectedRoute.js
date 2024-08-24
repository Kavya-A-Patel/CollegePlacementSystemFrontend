import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

function ProtectedRoute({ children, role }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const userRole = Cookies.get("userRole");

  useEffect(() => {
    const verifyToken = async () => {
      try {
        await axios.get("http://localhost:5001/api/auth/checkAuth", {
          withCredentials: true,
        });
        setIsAuthenticated(true);
      } catch (error) {
        Cookies.remove("jwt");
        Cookies.remove("userRole");
        setIsAuthenticated(false);
      }
    };

    if (userRole && userRole === role) {
      verifyToken();
    } else {
      setIsAuthenticated(false);
    }
  }, [role, userRole]);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated || userRole !== role) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;
