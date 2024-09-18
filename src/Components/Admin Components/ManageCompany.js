import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ManageCompany = () => {
  const [companyList, setCompanyList] = useState([]);
  const [newCompany, setNewCompany] = useState({
    name: "",
    description: "",
    website: "",
    contactEmail: "",
  });

  const navigate = useNavigate();

  const fetchCompanies = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5001/api/admin/companies",
        { withCredentials: true }
      );
      setCompanyList(response.data);
    } catch (error) {
      console.error("Error fetching companies:", error);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  const handleInputChange = (e) => {
    setNewCompany({
      ...newCompany,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddCompany = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5001/api/admin/companies",
        newCompany,
        { withCredentials: true }
      );
      setCompanyList([...companyList, response.data]);
      setNewCompany({
        name: "",
        description: "",
        website: "",
        contactEmail: "",
      });
    } catch (error) {
      console.error("Error adding company:", error);
    }
  };

  const handleDeleteCompany = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/admin/companies/${id}`, {
        withCredentials: true,
      });
      setCompanyList(companyList.filter((company) => company._id !== id));
    } catch (error) {
      console.error("Error deleting company:", error);
    }
  };

  const handleBackToDashboard = () => {
    navigate("/admin-dashboard");
  };

  const handleRefresh = () => {
    fetchCompanies();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-200 p-8">
      <div className="max-w-6xl mx-auto bg-white p-12 rounded-lg shadow-xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Manage Companies
          </h1>
          <div>
            <button
              onClick={handleBackToDashboard}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600 mr-2"
            >
              Back to Dashboard
            </button>
            <button
              onClick={handleRefresh}
              className="bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-800"
            >
              Refresh
            </button>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Add a New Company
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <input
              type="text"
              name="name"
              value={newCompany.name}
              onChange={handleInputChange}
              placeholder="Company Name"
              className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="description"
              value={newCompany.description}
              onChange={handleInputChange}
              placeholder="Description"
              className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="website"
              value={newCompany.website}
              onChange={handleInputChange}
              placeholder="Website"
              className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="contactEmail"
              value={newCompany.contactEmail}
              onChange={handleInputChange}
              placeholder="Contact Email"
              className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={handleAddCompany}
            className="mt-6 bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-800 transition duration-300 w-full sm:w-auto"
          >
            Add Company
          </button>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Manage Existing Companies
          </h2>
          <ul className="divide-y divide-gray-300">
            {companyList.map((company) => (
              <li
                key={company._id}
                className="flex justify-between items-center py-5 px-4 rounded-lg hover:bg-gray-50 transition duration-300"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {company.name}
                  </h3>
                  <p className="text-gray-600">
                    {company.description} - {company.website} -{" "}
                    {company.contactEmail}
                  </p>
                </div>
                <button
                  onClick={() => handleDeleteCompany(company._id)}
                  className="text-white bg-red-600 px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition duration-300"
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

export default ManageCompany;
