import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ManageApplicationsAdmin = () => {
  const [applications, setApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchApplications = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5001/api/admin/applications",
        { withCredentials: true }
      );
      setApplications(response.data);
    } catch (error) {
      console.error("Error fetching applications:", error);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchApplications().finally(() => setLoading(false));
  }, []);

  const handleCancel = async (id) => {
    try {
      await axios.put(
        `http://localhost:5001/api/admin/applications/${id}`,
        { status: "Cancelled" },
        { withCredentials: true }
      );
      setApplications(applications.filter((app) => app._id !== id));
      setSelectedApplication(null);
    } catch (error) {
      console.error("Error cancelling application:", error);
    }
  };

  const closeModal = () => {
    setSelectedApplication(null);
  };

  const handleRefresh = async () => {
    setLoading(true);
    await fetchApplications();
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-200 p-8">
      <div className="max-w-6xl mx-auto bg-white p-12 rounded-lg shadow-xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Manage Applications
          </h1>
          <div>
            <button
              onClick={() => navigate("/admin-dashboard")}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 mr-2"
            >
              Back to Dashboard
            </button>
            <button
              onClick={handleRefresh}
              className={`bg-green-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-green-700 transition duration-300 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Refreshing..." : "Refresh"}
            </button>
          </div>
        </div>

        {applications.length === 0 ? (
          <div className="text-center text-gray-700">
            <p className="text-xl">No applications found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((application) => (
              <div
                key={application._id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedApplication(application)}
              >
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {application.studentId.name}
                </h2>
                <p className="text-gray-700">
                  <strong className="font-medium">Company:</strong>{" "}
                  {application.companyId.name}
                </p>
                <p className="text-gray-700">
                  <strong className="font-medium">Position:</strong>{" "}
                  {application.positionTitle}
                </p>
                <p className="text-gray-700">
                  <strong className="font-medium">Status:</strong>{" "}
                  {application.status}
                </p>
              </div>
            ))}
          </div>
        )}

        {selectedApplication && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-50">
            <div className="bg-white p-8 rounded-lg shadow-xl w-11/12 md:w-1/2 relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-600 text-2xl hover:text-gray-800 transition duration-300"
              >
                &times;
              </button>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {selectedApplication.companyId.name}
              </h2>
              <p className="text-lg mb-4">
                <strong className="font-medium">Student:</strong>{" "}
                {selectedApplication.studentId.name}
              </p>
              <p className="text-lg mb-4">
                <strong className="font-medium">Position:</strong>{" "}
                {selectedApplication.positionTitle}
              </p>
              <p className="text-lg mb-4">
                <strong className="font-medium">Status:</strong>{" "}
                {selectedApplication.status}
              </p>
              <p className="text-lg mb-4">
                <strong className="font-medium">Resume:</strong>{" "}
                <a
                  href={selectedApplication.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800 transition-colors duration-300"
                >
                  View Resume
                </a>
              </p>
              <p className="text-lg mb-4">
                <strong className="font-medium">Cover Letter:</strong>{" "}
                {selectedApplication.coverLetter}
              </p>
              <p className="text-lg mb-4">
                <strong className="font-medium">Application Date:</strong>{" "}
                {new Date(selectedApplication.createdAt).toLocaleDateString()}
              </p>
              <div className="flex justify-end">
                <button
                  onClick={() => handleCancel(selectedApplication._id)}
                  className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition duration-300"
                >
                  Cancel Application
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageApplicationsAdmin;
