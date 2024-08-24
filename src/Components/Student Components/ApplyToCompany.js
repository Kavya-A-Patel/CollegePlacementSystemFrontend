import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ApplyToCompany() {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [resume, setResume] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5001/api/companies",
          {
            withCredentials: true,
          }
        );
        setCompanies(data);
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };

    fetchCompanies();
  }, []);

  const handleApply = async (position) => {
    try {
      const applicationData = {
        studentId: "yourStudentId",
        companyId: selectedCompany._id,
        positionTitle: position.title,
        resume,
        coverLetter,
      };

      await axios.post(
        "http://localhost:5001/api/applications",
        applicationData,
        {
          withCredentials: true,
        }
      );

      alert("Application submitted successfully!");
      navigate("/student-dashboard");
    } catch (error) {
      console.error("Error submitting application:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-50 p-10">
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
          Apply to Company
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company) => (
            <div
              key={company._id}
              className="bg-white rounded-xl shadow-lg p-6"
              onClick={() => setSelectedCompany(company)}
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {company.name}
              </h3>
              <p className="text-gray-600 mt-2">{company.description}</p>
            </div>
          ))}
        </div>
      </div>
      {selectedCompany && (
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900">
            {selectedCompany.name} - Open Positions
          </h3>
          <div className="grid grid-cols-1 gap-6 mt-6">
            {selectedCompany.openPositions.map((position, index) => (
              <div key={index} className="p-4 bg-gray-100 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-800">
                  {position.title}
                </h4>
                <p className="text-gray-600 mt-2">{position.description}</p>
                <p className="text-gray-500 mt-2">
                  Deadline:{" "}
                  {new Date(position.applicationDeadline).toLocaleDateString()}
                </p>
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Resume Link"
                    value={resume}
                    onChange={(e) => setResume(e.target.value)}
                    className="w-full p-2 rounded-lg border border-gray-300 mb-2"
                  />
                  <textarea
                    placeholder="Cover Letter"
                    value={coverLetter}
                    onChange={(e) => setCoverLetter(e.target.value)}
                    className="w-full p-2 rounded-lg border border-gray-300 mb-2"
                    rows="4"
                  />
                  <button
                    onClick={() => handleApply(position)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
                  >
                    Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ApplyToCompany;
