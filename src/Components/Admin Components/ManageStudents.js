import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ManageStudents = () => {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
    contact: "",
  });
  const [editing, setEditing] = useState(null);

  const navigate = useNavigate();

  const fetchStudents = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5001/api/admin/students",
        { withCredentials: true }
      );
      setStudents(data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateStudent = async () => {
    try {
      await axios.post("http://localhost:5001/api/admin/students", form, {
        withCredentials: true,
      });
      setForm({ name: "", email: "", password: "", username: "", contact: "" });
      fetchStudents();
    } catch (error) {
      console.error("Error creating student:", error);
    }
  };

  const handleEditStudent = async () => {
    try {
      await axios.put(
        `http://localhost:5001/api/admin/students/${editing}`,
        form,
        { withCredentials: true }
      );
      setEditing(null);
      setForm({
        name: "",
        email: "",
        password: "",
        username: "",
        contact: "",
      });
      fetchStudents();
    } catch (error) {
      console.error("Error editing student:", error);
    }
  };

  const handleDeleteStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/admin/students/${id}`, {
        withCredentials: true,
      });
      fetchStudents();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="p-6">
      <div className="mb-4">
        <button
          onClick={() => navigate("/admin-dashboard")}
          className="bg-gray-500 text-white px-4 py-2 mr-4"
        >
          Back to Dashboard
        </button>
        <button
          onClick={fetchStudents}
          className="bg-blue-500 text-white px-4 py-2"
        >
          Refresh
        </button>
      </div>

      <h1 className="text-2xl font-semibold mb-4">Manage Students</h1>

      <div className="mb-6">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          value={form.contact}
          onChange={handleChange}
          className="border p-2 mb-2 w-full"
        />

        {editing ? (
          <button
            onClick={handleEditStudent}
            className="bg-blue-500 text-white px-4 py-2"
          >
            Edit Student
          </button>
        ) : (
          <button
            onClick={handleCreateStudent}
            className="bg-green-500 text-white px-4 py-2"
          >
            Add Student
          </button>
        )}
      </div>

      <div>
        {students.length === 0 ? (
          <p>No students found</p>
        ) : (
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Contact</th>
                <th className="py-2 px-4 border-b">Username</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student._id}>
                  <td className="py-2 px-4 border-b">{student.name}</td>
                  <td className="py-2 px-4 border-b">{student.email}</td>
                  <td className="py-2 px-4 border-b">
                    {student.profile.contactPhone}
                  </td>
                  <td className="py-2 px-4 border-b">{student.username}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => {
                        setEditing(student._id);
                        setForm({
                          name: student.name,
                          email: student.email,
                          password: "",
                          username: student.username,
                          contact: student.profile.contactPhone,
                        });
                      }}
                      className="bg-yellow-500 text-white px-4 py-1 mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteStudent(student._id)}
                      className="bg-red-500 text-white px-4 py-1"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ManageStudents;
