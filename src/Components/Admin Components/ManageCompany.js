import React from "react";
import Cookies from "js-cookie";

function ManageCompany() {
  console.log(Cookies.get("userRole"));
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Manage Company</h2>
      <form></form>
    </div>
  );
}

export default ManageCompany;
