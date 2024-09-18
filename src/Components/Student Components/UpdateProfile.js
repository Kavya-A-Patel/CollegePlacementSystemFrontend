import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    username: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const fetchProfile = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5001/api/student/profile",
        { withCredentials: true }
      );
      setForm({
        name: data.name,
        email: data.email,
        contact: data.contact,
        username: data.username,
      });
    } catch (err) {
      setError("Error fetching profile data.");
      console.error("Error fetching profile:", err);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    setLoading(true);

    try {
      await axios.put(
        "http://localhost:5001/api/student/update-profile",
        form,
        { withCredentials: true }
      );
      setSuccess("Profile updated successfully.");
    } catch (err) {
      setError("Error updating profile. Please try again.");
      console.error("Error updating profile:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleBackToDashboard = () => {
    navigate("/student-dashboard");
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-200 p-8">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
          Update Profile
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Contact Number
            </label>
            <input
              type="text"
              name="contact"
              value={form.contact}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your contact number"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
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
            {loading ? "Updating Profile..." : "Update Profile"}
          </button>
          <button
            type="button"
            onClick={handleBackToDashboard}
            className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300 mt-4"
          >
            Back to Dashboard
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
