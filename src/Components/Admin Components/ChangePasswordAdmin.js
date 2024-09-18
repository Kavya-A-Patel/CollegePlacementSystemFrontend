import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const ChangePasswordAdmin = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!currentPassword || !newPassword || !confirmNewPassword) {
      setError("All fields are required.");
      return;
    }

    if (newPassword !== confirmNewPassword) {
      setError("New passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      await axios.post(
        "http://localhost:5001/api/admin/change-password",
        {
          currentPassword,
          newPassword,
        },
        { withCredentials: true }
      );
      setSuccess("Password changed successfully.");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmNewPassword("");
    } catch (err) {
      setError("Error changing password. Please try again.");
      console.error("Error changing password:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    Cookies.remove("userRole");
    navigate("/logout");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-200 p-8">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
          Change Password
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Current Password
            </label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter current password"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              New Password
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter new password"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Confirm New Password
            </label>
            <input
              type="password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Re-enter new password"
              required
            />
          </div>
          {error && <p className="text-red-600 text-sm font-medium">{error}</p>}
          {success && (
            <p className="text-green-600 text-sm font-medium">{success}</p>
          )}
          <button
            type="submit"
            className={`w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Changing Password..." : "Change Password"}
          </button>
          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={() => navigate("/admin-dashboard")}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
            >
              Back to Dashboard
            </button>
            <button
              type="button"
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
            >
              Logout
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordAdmin;
