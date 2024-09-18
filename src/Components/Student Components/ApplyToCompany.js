import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ApplyToCompany = () => {
  const [companies, setCompanies] = useState([]);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetchCompanies();
    fetchApplications().finally(() => setLoading(false));
  }, []);

  const fetchCompanies = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5001/api/student/companies",
        { withCredentials: true }
      );
      setCompanies(data);
    } catch (error) {
      console.error("Error fetching companies", error);
    }
  };

  const fetchApplications = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5001/api/student/applications",
        { withCredentials: true }
      );
      setApplications(data.map((app) => app.positionTitle));
    } catch (error) {
      console.error("Error fetching applications", error);
    }
  };

  const handleApply = async (companyId, positionTitle) => {
    try {
      setLoading(true);
      await axios.post(
        `http://localhost:5001/api/student/companies/${companyId}/apply`,
        {
          positionTitle,
          resume: "URL to resume",
          coverLetter: "Cover letter text",
        },
        { withCredentials: true }
      );
      setApplications((prev) => [...prev, positionTitle]);
    } catch (error) {
      console.error("Error applying to company", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    try {
      setLoading(true);
      await fetchCompanies();
      await fetchApplications();
    } catch (error) {
      console.error("Error refreshing companies list", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Apply to Companies
          </h1>
          <div>
            <button
              onClick={() => navigate("/student-dashboard")}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 mr-2"
            >
              Back to Dashboard
            </button>
            <button
              onClick={handleRefresh}
              className="bg-green-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
            >
              Refresh List
            </button>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company) => (
              <div
                key={company._id}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {company.name}
                </h2>
                <p className="text-gray-700 mb-4">{company.description}</p>
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-700 transition-colors duration-300"
                >
                  Visit Website
                </a>
                <div className="mt-4">
                  {company.openPositions.map((position) => (
                    <div key={position.title} className="mb-4">
                      <h3 className="text-lg font-semibold text-gray-700">
                        {position.title}
                      </h3>
                      <p className="text-gray-600">{position.description}</p>
                      <button
                        onClick={() => handleApply(company._id, position.title)}
                        disabled={applications.includes(position.title)}
                        className={`mt-2 px-4 py-2 rounded-lg ${
                          applications.includes(position.title)
                            ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                            : "bg-blue-600 text-white hover:bg-blue-700 transition duration-300"
                        }`}
                      >
                        {applications.includes(position.title)
                          ? "Applied"
                          : "Apply"}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplyToCompany;
