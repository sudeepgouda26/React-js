import React from 'react'
import { useNavigate } from 'react-router-dom';

const Userlogo = () => {
    let navigation = useNavigate();
  const navigate = () => {
    navigation('/login')
    
  };

  return (
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 text-white font-bold text-xl shadow-inner">
      <div className="flex flex-col items-center justify-center">
        <svg onClick={navigate} className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M4 20c0-4 8-4 8-4s8 0 8 4" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>
    </div>
  );
}

export default Userlogo
