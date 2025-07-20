import React,{ useState } from 'react';
import axios from 'axios';
import { Outlet, useNavigate } from 'react-router-dom';

const Admin = () => {
  const [admin, setAdmin] = useState(false);
  const navigate = useNavigate();
  const [adminData, setAdminData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminData({ ...adminData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = adminData;
    try {
      const response = await axios.get('http://localhost:5000/admin');
      console.log(response.data);
      const adminFound = response.data.find(
        (admin) => admin.email === email && admin.password === password
      ); // Assuming the admin data is returned as an object
      console.log(adminFound);

      if (adminFound) {
        alert('Admin login successful!');
        setAdmin(true);
        navigate('/admin/admin-dashboard'); // Or wherever you want to redirect
      } else {
        alert('Invalid admin credentials');
      }
    } catch (err) {
      console.error('Login error:', err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="w-full">
        {!admin ? (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md text-black space-y-4 mx-auto"
          >
            <h2 className="text-2xl font-bold text-center">Admin Login</h2>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={adminData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={adminData.password}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>
        ) : null}
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
