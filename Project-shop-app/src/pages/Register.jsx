// src/pages/Register.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
      const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    let [login , setLogin] = useState(true);
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const { username, email, password } = registerData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };
    const handleNavigate = () => {
        navigate('/login');
        setLogin(!login);
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!usernameRegex.test(username)) {
        alert('Username must be 3-20 characters long and can only contain letters, numbers, and underscores.');
        return;
      }
      if (!emailRegex.test(email)) {
        alert('Invalid email format.');
        return;
      }
      if (!passwordRegex.test(password)) {
        alert('Password must be at least 8 characters long and contain at least one letter and one number.');
        return;   
      }

      await axios.post('http://localhost:5000/users', { username, email, password });
      alert('Registered successfully!');
      navigate('/login');
    } catch (err) {
      console.error('Registration error:', err);
    }
  };

  return (
<div
  className={`min-h-screen flex items-center justify-center bg-gray-900 text-white px-4 ${
    login ?  "":'flex-row-reverse'
  }`}
>
      <div className="w-[60vw] max-w-5xl h-[70vh] bg-white/10 backdrop-blur-md shadow-2xl rounded-2xl flex transition-all duration-700">
        <div className="w-[50%] flex items-center justify-center p-6">
          <img
            src="https://images.unsplash.com/photo-1744144501263-d51045ebec13?q=80"
            alt="Register"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="w-1/2 flex flex-col justify-center px-10">
          <h2 className="text-3xl font-bold mb-4">Create a new account</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Enter your name"
              onChange={handleChange}
              className="input-style"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="input-style"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="input-style"
            />
            <button type="submit" className="btn-style">
              Register
            </button>
          </form>
          <p className="text-sm mt-4">
            Already have an account?{' '}
            <button
              onClick={handleNavigate}
              className="underline text-blue-400 hover:text-blue-500"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
