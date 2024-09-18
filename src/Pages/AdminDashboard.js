import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("userRole");
    navigate("/logout");
  };

  const dashboardItems = [
    { title: "Post & Manage Jobs", path: "/post-manage-jobs" },
    { title: "Manage Company", path: "/manage-company" },
    { title: "Manage Applications", path: "/manage-applications-admin" },
    { title: "Generate Offer Letters", path: "/generate-offer-letters" },
    { title: "Manage Students", path: "/manage-students" },
    { title: "Change Password", path: "/change-password-admin" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 p-8">
      <div className="bg-white shadow-lg py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h2 className="text-4xl font-bold text-gray-800 tracking-tight">
            Admin Dashboard
          </h2>
          <button
            onClick={handleLogout}
            className="text-white bg-gradient-to-r from-red-500 to-red-600 px-6 py-3 rounded-full shadow-lg hover:from-red-600 hover:to-red-700 transition duration-300"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {dashboardItems.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.path)}
            className="group bg-white rounded-lg shadow-md p-6 flex items-center justify-between transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-gray-700 group-hover:text-gray-900">
              {item.title}
            </h3>
            <svg
              className="w-8 h-8 text-red-500 group-hover:text-red-700 transition-colors duration-300"
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

export default AdminDashboard;
