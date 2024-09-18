import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { Link } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.toLowerCase();
    const password = document.getElementById("password").value;

    try {
      const { data } = await axios.post(
        "http://localhost:5001/api/auth/verify",
        { username, password },
        { withCredentials: true }
      );
      Cookies.set("userRole", data.role, { expires: 1 });
      if (data.role === "admin") navigate("/admin-dashboard");
      else if (data.role === "student") navigate("/student-dashboard");
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-100"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/Images/LoginPageBG.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900">Login</h2>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm">
            <div className="mb-4">
              <label htmlFor="Username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Username"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="flex items-center justify-end">
            <div className="text-sm">
              <Link
                to="/forgot-password-page"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </Link>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
