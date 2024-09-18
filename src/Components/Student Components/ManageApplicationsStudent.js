import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ManageApplicationsStudent = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApplications = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          "http://localhost:5001/api/student/applications",
          { withCredentials: true }
        );
        setApplications(data);
      } catch (error) {
        console.error("Error fetching applications", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  const handleCancel = async (applicationId) => {
    setLoading(true);
    try {
      await axios.delete(
        `http://localhost:5001/api/student/application/${applicationId}`,
        { withCredentials: true }
      );
      setApplications((prev) =>
        prev.filter((app) => app._id !== applicationId)
      );
      setSelectedApplication(null);
    } catch (error) {
      console.error("Error canceling application", error);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setSelectedApplication(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Manage Applications
          </h1>
          <button
            onClick={() => navigate("/student-dashboard")}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Back to Dashboard
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-blue-500"></div>
          </div>
        ) : applications.length === 0 ? (
          <div className="text-center text-gray-700">
            <p className="text-xl">No applications found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((application) => (
              <div
                key={application._id}
                className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
                onClick={() => setSelectedApplication(application)}
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {application.companyId.name}
                </h2>
                <p className="text-gray-700">
                  <strong>Position:</strong> {application.positionTitle}
                </p>
                <p className="text-gray-700">
                  <strong>Status:</strong> {application.status || "Pending"}
                </p>
              </div>
            ))}
          </div>
        )}

        {selectedApplication && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg shadow-xl w-11/12 md:w-1/2 relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-700 text-2xl"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {selectedApplication.companyId.name}
              </h2>
              <p className="mb-4">
                <strong>Position:</strong> {selectedApplication.positionTitle}
              </p>
              <p className="mb-4">
                <strong>Status:</strong>{" "}
                {selectedApplication.status || "Pending"}
              </p>
              <p className="mb-4">
                <strong>Resume:</strong>{" "}
                <a
                  href={selectedApplication.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-700 transition-colors duration-300"
                >
                  View Resume
                </a>
              </p>
              <p className="mb-4">
                <strong>Cover Letter:</strong> {selectedApplication.coverLetter}
              </p>
              <p className="mb-4">
                <strong>Application Date:</strong>{" "}
                {new Date(selectedApplication.createdAt).toLocaleDateString()}
              </p>
              <div className="flex justify-end">
                <button
                  onClick={() => handleCancel(selectedApplication._id)}
                  className="bg-red-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-700 transition duration-300"
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

export default ManageApplicationsStudent;
