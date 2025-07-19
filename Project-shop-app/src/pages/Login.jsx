// src/pages/Login.jsx
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../UserContext/UserContext';

const Login = () => {
  let {setUser}= useContext(userContext)
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
     let res = await axios.get("http://localhost:5000/users")

     let user =  res.data.find((user)=>{
      return user.email === loginData.email && user.password === loginData.password;
     })

    if (!user) {
      alert('Invalid email or password');
      return;
    }
    alert('Login successful!');

    setUser(user);
   
    navigate('/user');  
    console.log('Login submitted:', loginData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
      <div className="w-[60vw] max-w-5xl h-[70vh] bg-white/10 backdrop-blur-md shadow-2xl rounded-2xl flex transition-all duration-700">
        <div className="w-[50%] flex items-center justify-center p-6">
          <img
            src="https://images.unsplash.com/photo-1744144501263-d51045ebec13?q=80"
            alt="Login Visual"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="w-1/2 flex flex-col justify-center px-10">
          <h2 className="text-3xl font-bold mb-4">Login to your account</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={loginData.email}
              onChange={handleChange}
              className="input-style"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleChange}
              className="input-style"
              required
            />
            <button type="submit" className="btn-style">
              Login
            </button>
          </form>

          <p className="text-sm mt-4">
            Don’t have an account?{' '}
            <button
              className="underline text-blue-400 hover:text-blue-500"
              onClick={() => navigate('/register')}
            >
              Register
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
