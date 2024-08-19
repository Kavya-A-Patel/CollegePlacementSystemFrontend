import axios from "axios";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

function ProtectedRoute({ children, role }) {
  const userRole = Cookies.get("userRole");

  const verifyToken = async () => {
    try {
      await axios.get("http://localhost:5000/api/auth/verify", {
        headers: { Authorization: `Bearer ${Cookies.get("jwt")}` },
      });
    } catch (error) {
      Cookies.remove("jwt");
      Cookies.remove("userRole");
      return false;
    }
    return true;
  };

  if (!userRole || userRole !== role) {
    return <Navigate to="/" />;
  }

  if (!verifyToken()) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;
