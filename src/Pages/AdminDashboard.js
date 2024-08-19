// import Cookies from "js-cookie";
// import React from "react";
// import { useNavigate } from "react-router-dom";

// function AdminDashboard() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Logic to clear session/cookie data
//     Cookies.remove("userRole");
//     navigate("/");
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="flex justify-between items-center max-w-7xl mx-auto mb-6">
//         <h2 className="text-3xl font-bold text-gray-900">Admin Services</h2>
//         <button
//           onClick={handleLogout}
//           className="text-white bg-red-500 px-4 py-2 rounded-lg shadow hover:bg-red-600"
//         >
//           Logout
//         </button>
//       </div>
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         <DashboardCard title="Manage Students" icon="👥" />
//         <DashboardCard title="Placement Setup" icon="🏢" />
//         <DashboardCard title="Company Management" icon="🏙️" />
//       </div>
//     </div>
//   );
// }

// function DashboardCard({ title, icon }) {
//   return (
//     <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
//       <div className="text-3xl mr-4">{icon}</div>
//       <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
//     </div>
//   );
// }

// export default AdminDashboard;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";

// function AdminDashboard() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Clear the cookie data
//     Cookies.remove("userRole");
//     // Navigate back to the login page
//     navigate("/logout");
//   };

//   const dashboardItems = [
//     { title: "Generate Offer Letters", path: "/generate-offer-letters" },
//     { title: "Manage Company", path: "/manage-company" },
//     { title: "Manage Applications", path: "/manage-applications" },
//     { title: "Select Candidates", path: "/select-candidates" },
//     { title: "Post & Manage Jobs", path: "/post-manage-jobs" },
//     { title: "Change Password", path: "/change-password" },
//     { title: "Update Profile", path: "/update-profile" },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="flex justify-between items-center max-w-7xl mx-auto mb-6">
//         <h2 className="text-3xl font-bold text-gray-900">Admin Dashboard</h2>
//         <button
//           onClick={handleLogout}
//           className="text-white bg-red-500 px-4 py-2 rounded-lg shadow hover:bg-red-600"
//         >
//           Logout
//         </button>
//       </div>
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {dashboardItems.map((item, index) => (
//           <div
//             key={index}
//             onClick={() => navigate(item.path)}
//             className="bg-white rounded-lg shadow-lg p-6 flex items-center cursor-pointer hover:bg-gray-200"
//           >
//             <h3 className="text-lg font-semibold text-gray-700">
//               {item.title}
//             </h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default AdminDashboard;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";

// function AdminDashboard() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     Cookies.remove("userRole");
//     navigate("/logout");
//   };

//   const dashboardItems = [
//     { title: "Generate Offer Letters", path: "/generate-offer-letters" },
//     { title: "Manage Company", path: "/manage-company" },
//     { title: "Manage Applications", path: "/manage-applications" },
//     { title: "Select Candidates", path: "/select-candidates" },
//     { title: "Post & Manage Jobs", path: "/post-manage-jobs" },
//     { title: "Change Password", path: "/change-password" },
//     { title: "Update Profile", path: "/update-profile" },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-gray-100 via-white to-gray-100 p-8">
//       <div className="flex justify-between items-center max-w-7xl mx-auto mb-8">
//         <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
//           Admin Dashboard
//         </h2>
//         <button
//           onClick={handleLogout}
//           className="text-white bg-red-500 px-5 py-2 rounded-lg shadow-lg hover:bg-red-600 transition-colors duration-300"
//         >
//           Logout
//         </button>
//       </div>
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {dashboardItems.map((item, index) => (
//           <div
//             key={index}
//             onClick={() => navigate(item.path)}
//             className="bg-white rounded-xl shadow-lg p-8 flex items-center justify-between cursor-pointer hover:shadow-xl transition-shadow duration-300 hover:bg-gray-50"
//           >
//             <h3 className="text-xl font-semibold text-gray-800">
//               {item.title}
//             </h3>
//             <svg
//               className="w-6 h-6 text-gray-400"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M9 5l7 7-7 7"
//               ></path>
//             </svg>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default AdminDashboard;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";

// function AdminDashboard() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     Cookies.remove("userRole");
//     navigate("/logout");
//   };

//   const dashboardItems = [
//     { title: "Generate Offer Letters", path: "/generate-offer-letters" },
//     { title: "Manage Company", path: "/manage-company" },
//     { title: "Manage Applications", path: "/manage-applications" },
//     { title: "Select Candidates", path: "/select-candidates" },
//     { title: "Post & Manage Jobs", path: "/post-manage-jobs" },
//     { title: "Change Password", path: "/change-password" },
//     { title: "Update Profile", path: "/update-profile" },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-10">
//       <div className="flex justify-between items-center max-w-6xl mx-auto mb-12">
//         <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
//           Admin Dashboard
//         </h2>
//         <button
//           onClick={handleLogout}
//           className="text-white bg-gradient-to-r from-red-500 to-red-600 px-6 py-2.5 rounded-full shadow-lg hover:from-red-600 hover:to-red-700 transition duration-300"
//         >
//           Logout
//         </button>
//       </div>
//       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {dashboardItems.map((item, index) => (
//           <div
//             key={index}
//             onClick={() => navigate(item.path)}
//             className="group bg-white rounded-xl shadow-lg p-8 flex items-center justify-between transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
//           >
//             <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-900">
//               {item.title}
//             </h3>
//             <svg
//               className="w-8 h-8 text-gray-400 group-hover:text-gray-600 transition-colors duration-300"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M9 5l7 7-7 7"
//               ></path>
//             </svg>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default AdminDashboard;

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
      {/* Navbar Section */}
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

      {/* Dashboard Items */}
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
