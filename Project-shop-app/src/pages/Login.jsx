import { useState } from 'react';
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const[registerData, setRegisterData] = useState({
    username: '',
    email: '',
    password: '',
  })
  let navigate=useNavigate();

  let {username, email, password} = registerData;

  let handelChange =(e)=>{
    let {name, value} = e.target;
    setRegisterData({...registerData,[name]:value});
    console.log(registerData);

  }
  let handelSubmit = async(e)=>{
    e.preventDefault();
      navigate('/login')
  let userData={username, email, password};
  let data = await axios.post("http://localhost:5000/users",userData)
  navigate('/login')
    
  }
 
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
      <div
        className={`w-[60vw] max-w-5xl h-[70vh] bg-white/10 backdrop-blur-md shadow-2xl rounded-2xl flex transition-all duration-700 ${
          isLogin ? '' : 'flex-row-reverse'
        }`}
      >
       
        <div className="w-[50%] flex items-center justify-center p-6">
          <img
            src="https://images.unsplash.com/photo-1744144501263-d51045ebec13?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Auth Visual"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="w-1/2 flex flex-col justify-center px-10">
          <h2 className="text-3xl font-bold mb-4">
            {isLogin ? 'Login to your account' : 'Create a new account'}
          </h2>

        

    {isLogin ? (
      <form>
        <input
          type="email"
          name="email"
          placeholder="Email"
        
          className="w-80 px-5 py-3 mt-7 rounded-xl bg-white/10 backdrop-blur-md text-white placeholder-white/60 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
      
          className="w-80 px-5 py-3 mt-7 rounded-xl bg-white/10 backdrop-blur-md text-white placeholder-white/60 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300"
        />
        <button
          type="submit"
          className="px-8 py-3 mt-7 bg-[#1e2a38] text-white text-xl font-semibold rounded-2xl shadow-[0_8px_0_0_#12202f] hover:translate-y-1 hover:shadow-[0_4px_0_0_#12202f] active:translate-y-0 active:shadow-[0_0px_0_0_#12202f] transition-all duration-300"
        >
          Login
        </button>
      </form>
    ) : (
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter your name"
          onChange={handelChange}
          className="w-80 px-5 py-3 mt-7 rounded-xl bg-white/10 backdrop-blur-md text-white placeholder-white/60 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handelChange}
          className="w-80 px-5 py-3 mt-7 rounded-xl bg-white/10 backdrop-blur-md text-white placeholder-white/60 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handelChange}
          className="w-80 px-5 py-3 mt-7 rounded-xl bg-white/10 backdrop-blur-md text-white placeholder-white/60 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300"
        />
        <button
          type="submit"
          className="px-8 py-3 bg-[#1e2a38] text-white text-xl font-semibold rounded-2xl shadow-[0_8px_0_0_#12202f] hover:translate-y-1 hover:shadow-[0_4px_0_0_#12202f] active:translate-y-0 active:shadow-[0_0px_0_0_#12202f] transition-all duration-300"
        >
          Register
        </button>
      </form>
    )}
 
          <p className="text-sm mt-4">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <button
              className="underline text-blue-400 hover:text-blue-500"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Register' : 'Login'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};



export default Login
