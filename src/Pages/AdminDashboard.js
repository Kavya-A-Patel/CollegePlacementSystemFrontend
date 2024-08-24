import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function AdminDashboard() {
  console.log(Cookies.get("userRole"));
  console.log("Page Over");
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

  //       if (data.role !== "admin") {
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
    { title: "Generate Offer Letters", path: "/generate-offer-letters" },
    { title: "Manage Company", path: "/manage-company" },
    { title: "Manage Applications", path: "/manage-applications" },
    { title: "Select Candidates", path: "/select-candidates" },
    { title: "Post & Manage Jobs", path: "/post-manage-jobs" },
    { title: "Change Password", path: "/change-password" },
    { title: "Update Profile", path: "/update-profile" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="bg-white shadow-md py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Admin Dashboard
          </h2>
          <button
            onClick={handleLogout}
            className="text-white bg-gradient-to-r from-red-500 to-red-600 px-6 py-2.5 rounded-full shadow-lg hover:from-red-600 hover:to-red-700 transition duration-300"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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

export default AdminDashboard;
