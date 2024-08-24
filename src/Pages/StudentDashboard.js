import React from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function StudentDashboard() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const checkAuth = async () => {
  //     try {
  //       const { data } = await axios.get(
  //         "http://localhost:5001/api/auth/checkAuth",
  //         {
  //           withCredentials: true,
  //         }
  //       );

  //       if (Cookies.get("userRole") !== "student") {
  //         navigate("/");
  //       }
  //     } catch (error) {
  //       navigate("/");
  //     }
  //   };

  //   checkAuth();
  // }, [navigate]);

  const handleLogout = () => {
    Cookies.remove("userRole");
    navigate("/logout");
  };

  const dashboardItems = [
    { title: "Apply to Company", path: "/apply-company" },
    { title: "Change Password", path: "/change-password" },
    { title: "Update Profile", path: "/update-profile" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-50 p-10">
      <div className="flex justify-between items-center max-w-6xl mx-auto mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Student Dashboard
        </h2>
        <button
          onClick={handleLogout}
          className="text-white bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-2.5 rounded-full shadow-lg hover:from-blue-600 hover:to-blue-700 transition duration-300"
        >
          Logout
        </button>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {dashboardItems.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.path)}
            className="group bg-white rounded-xl shadow-lg p-8 flex items-center justify-between transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-900">
              {item.title}
            </h3>
            <svg
              className="w-8 h-8 text-gray-400 group-hover:text-gray-600 transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentDashboard;
