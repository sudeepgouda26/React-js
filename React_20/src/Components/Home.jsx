import React from 'react'
import { Outlet, Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Hello</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="addTrainer">Add Trainer</Link></li>
        <li><Link to="alldetails">All Details</Link></li>
      </ul>

      <div>
       
        <Outlet />
      </div>
    </div>
  )
}

export default Home
