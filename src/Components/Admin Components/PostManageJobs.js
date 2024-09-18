import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PostManageJobs = () => {
  const [jobList, setJobList] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [newJob, setNewJob] = useState({
    title: "",
    company: "",
    description: "",
    requirements: "",
    applicationDeadline: "",
  });

  const navigate = useNavigate();

  const fetchCompanies = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5001/api/admin/companies",
        { withCredentials: true }
      );
      setCompanies(response.data);
    } catch (error) {
      console.error("Error fetching companies:", error);
    }
  };

  const fetchJobs = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5001/api/admin/companies",
        { withCredentials: true }
      );
      const jobs = response.data.reduce((acc, company) => {
        const companyJobs = company.openPositions.map((job) => ({
          ...job,
          companyId: company._id,
          companyName: company.name,
        }));
        return [...acc, ...companyJobs];
      }, []);
      setJobList(jobs);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  useEffect(() => {
    fetchCompanies();
    fetchJobs();
  }, []);

  const handleInputChange = (e) => {
    setNewJob({
      ...newJob,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddJob = async () => {
    try {
      await axios.post(
        `http://localhost:5001/api/admin/companies/${newJob.company}/jobs`,
        newJob,
        { withCredentials: true }
      );
      setNewJob({
        title: "",
        company: "",
        description: "",
        requirements: "",
        applicationDeadline: "",
      });
      fetchJobs();
    } catch (error) {
      console.error("Error adding job:", error);
    }
  };

  const handleDeleteJob = async (companyId, jobId) => {
    try {
      await axios.delete(
        `http://localhost:5001/api/admin/companies/${companyId}/jobs/${jobId}`,
        { withCredentials: true }
      );
      setJobList(jobList.filter((job) => job._id !== jobId));
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  const handleRefresh = () => {
    fetchJobs();
  };

  const handleBackToDashboard = () => {
    navigate("/admin-dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white p-12 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Post & Manage Jobs
        </h1>

        <div className="mb-8 flex justify-between">
          <button
            onClick={handleBackToDashboard}
            className="bg-gray-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
          >
            Back to Dashboard
          </button>
          <button
            onClick={handleRefresh}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Refresh
          </button>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Post a New Job
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <input
              type="text"
              name="title"
              value={newJob.title}
              onChange={handleInputChange}
              placeholder="Job Title"
              className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              name="company"
              value={newJob.company}
              onChange={handleInputChange}
              className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Company</option>
              {companies.map((company) => (
                <option key={company._id} value={company._id}>
                  {company.name}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="description"
              value={newJob.description}
              onChange={handleInputChange}
              placeholder="Job Description"
              className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="requirements"
              value={newJob.requirements}
              onChange={handleInputChange}
              placeholder="Job Requirements"
              className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="date"
              name="applicationDeadline"
              value={newJob.applicationDeadline}
              onChange={handleInputChange}
              placeholder="Application Deadline"
              className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={handleAddJob}
            className="mt-8 bg-blue-600 text-white px-8 py-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 w-full sm:w-auto"
          >
            Add Job
          </button>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Manage Jobs
          </h2>
          <ul className="divide-y divide-gray-200">
            {jobList.map((job) => (
              <li
                key={job._id}
                className="flex justify-between items-center py-6"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {job.title}
                  </h3>
                  <p className="text-gray-600">
                    {job.companyName} - {job.description}
                  </p>
                  <p className="text-sm mt-2 text-gray-600">
                    Requirements: {job.requirements}
                  </p>
                  <p className="text-sm mt-2 text-gray-600">
                    Application Deadline:{" "}
                    {new Date(job.applicationDeadline).toLocaleDateString()}
                  </p>
                </div>
                <button
                  onClick={() => handleDeleteJob(job.companyId, job._id)}
                  className="text-white bg-red-600 px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition duration-300"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PostManageJobs;
