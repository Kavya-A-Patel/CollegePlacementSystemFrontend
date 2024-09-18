import React from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function StudentDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("userRole");
    navigate("/logout");
  };

  const dashboardItems = [
    { title: "Apply to Company", path: "/apply-company" },
    { title: "Manage Applications", path: "/manage-applications-student" },
    { title: "Update Profile", path: "/update-profile" },
    { title: "Change Password", path: "/change-password" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-100 p-8">
      <div className="flex justify-between items-center max-w-7xl mx-auto mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 tracking-tight">
          Student Dashboard
        </h2>
        <button
          onClick={handleLogout}
          className="text-white bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 rounded-full shadow-lg hover:from-blue-700 hover:to-blue-800 transition duration-300"
        >
          Logout
        </button>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {dashboardItems.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.path)}
            className="group bg-white rounded-lg shadow-lg p-6 flex items-center justify-between transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-gray-700 group-hover:text-gray-900">
              {item.title}
            </h3>
            <svg
              className="w-8 h-8 text-blue-500 group-hover:text-blue-700 transition-colors duration-300"
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
