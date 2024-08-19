// import React from "react";

// function StudentDashboard() {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-6xl p-8 space-y-8 bg-white rounded-lg shadow-lg">
//         <h2 className="text-3xl font-bold text-center text-gray-900">
//           Student Dashboard
//         </h2>
//         <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//           <div className="p-6 bg-indigo-100 rounded-lg">
//             <h3 className="text-lg font-semibold text-gray-800">My Profile</h3>
//             <p className="mt-2 text-gray-600">
//               View and edit your profile information.
//             </p>
//           </div>
//           <div className="p-6 bg-indigo-100 rounded-lg">
//             <h3 className="text-lg font-semibold text-gray-800">
//               Available Jobs
//             </h3>
//             <p className="mt-2 text-gray-600">
//               Browse job openings available for you.
//             </p>
//           </div>
//           <div className="p-6 bg-indigo-100 rounded-lg">
//             <h3 className="text-lg font-semibold text-gray-800">
//               Applications
//             </h3>
//             <p className="mt-2 text-gray-600">
//               Track your job applications and their status.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default StudentDashboard;

// import React from "react";

// function StudentDashboard() {
//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl font-bold text-gray-900 mb-6">
//           Student Dashboard
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           <DashboardCard title="Student Details" icon="👤" />
//           <DashboardCard title="SYTY Inhouse Admission" icon="✔️" />
//           <DashboardCard title="Fee" icon="💵" />
//           <DashboardCard title="Student Attendance" icon="📝" />
//           <DashboardCard title="Result Display" icon="📄" />
//           <DashboardCard title="Re-Examination" icon="❌" />
//         </div>
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

// export default StudentDashboard;

// import Cookies from "js-cookie";
// import React from "react";
// import { useNavigate } from "react-router-dom";

// function StudentDashboard() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Logic to clear session/cookie data
//     Cookies.remove("userRole");
//     navigate("/");
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="flex justify-between items-center max-w-7xl mx-auto mb-6">
//         <h2 className="text-3xl font-bold text-gray-900">Student Dashboard</h2>
//         <button
//           onClick={handleLogout}
//           className="text-white bg-red-500 px-4 py-2 rounded-lg shadow hover:bg-red-600"
//         >
//           Logout
//         </button>
//       </div>
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         <DashboardCard title="Student Details" icon="👤" />
//         <DashboardCard title="SYTY Inhouse Admission" icon="✔️" />
//         <DashboardCard title="Fee" icon="💵" />
//         <DashboardCard title="Student Attendance" icon="📝" />
//         <DashboardCard title="Result Display" icon="📄" />
//         <DashboardCard title="Re-Examination" icon="❌" />
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

// export default StudentDashboard;

// import React from "react";
// import Cookies from "js-cookie";
// import { useNavigate } from "react-router-dom";

// function StudentDashboard() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Clear the cookie data
//     Cookies.remove("userRole");
//     // Navigate back to the login page
//     navigate("/logout");
//   };

//   const dashboardItems = [
//     { title: "Apply Company", path: "/apply-company" },
//     { title: "Change Password", path: "/change-password" },
//     { title: "Update Profile", path: "/update-profile" },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="flex justify-between items-center max-w-7xl mx-auto mb-6">
//         <h2 className="text-3xl font-bold text-gray-900">Student Dashboard</h2>
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

// export default StudentDashboard;

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
