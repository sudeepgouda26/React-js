import React from 'react'
import Nav from './Nav'
import { Link, Outlet } from 'react-router'

const Home = () => {
  return (
    <div>
     
<div>
    <Link to="/">Home Page</Link>
    <Link to="/login">Login Page</Link>
    <Link to="/products">Products Page</Link>
</div>
<div>
    <Outlet></Outlet>
</div>
      
    </div>
  )
}

export default Home
