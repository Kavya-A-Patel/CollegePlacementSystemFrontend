import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import StudentDashboard from "./Pages/StudentDashboard";
import AdminDashboard from "./Pages/AdminDashboard";
import ProtectedRoute from "./Components/ProtectedRoute";
import ApplyToCompany from "./Components/Student Components/ApplyToCompany";
import GenerateOfferLetters from "./Components/Admin Components/GenerateOfferLetters";
import ManageCompany from "./Components/Admin Components/ManageCompany";
import ChangePasswordStudent from "./Components/Student Components/ChangePasswordStudent";
import ChangePasswordAdmin from "./Components/Admin Components/ChangePasswordAdmin";
import LogoutPage from "./Pages/LogoutPage";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";
import ManageApplicationsStudent from "./Components/Student Components/ManageApplicationsStudent";
import UpdateProfile from "./Components/Student Components/UpdateProfile";
import PostManageJobs from "./Components/Admin Components/PostManageJobs";
import ManageApplicationsAdmin from "./Components/Admin Components/ManageApplicationsAdmin";
import ManageStudents from "./Components/Admin Components/ManageStudents";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/forgot-password-page" element={<ForgotPasswordPage />} />
        <Route
          path="/student-dashboard"
          element={
            <ProtectedRoute role="student">
              <StudentDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/apply-company"
          element={
            <ProtectedRoute role="student">
              <ApplyToCompany />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute role="student">
              <ChangePasswordStudent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password-admin"
          element={
            <ProtectedRoute role="admin">
              <ChangePasswordAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/generate-offer-letters"
          element={
            <ProtectedRoute role="admin">
              <GenerateOfferLetters />
            </ProtectedRoute>
          }
        />
        <Route
          path="/manage-company"
          element={
            <ProtectedRoute role="admin">
              <ManageCompany />
            </ProtectedRoute>
          }
        />
        <Route
          path="/manage-applications-student"
          element={
            <ProtectedRoute role="student">
              <ManageApplicationsStudent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/update-profile"
          element={
            <ProtectedRoute role={"student"}>
              <UpdateProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/post-manage-jobs"
          element={
            <ProtectedRoute role={"admin"}>
              <PostManageJobs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/manage-applications-admin"
          element={
            <ProtectedRoute role={"admin"}>
              <ManageApplicationsAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/manage-students"
          element={
            <ProtectedRoute role={"admin"}>
              <ManageStudents />
            </ProtectedRoute>
          }
        />
        <Route path="/logout" element={<LogoutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
