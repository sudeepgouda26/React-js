import React, { useContext } from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import Carousel from './Carousel'
import { userContext } from '../UserContext/UserContext'
import Product from './Product'
import Login from './Login'

const Home = () => {
  let { user } = useContext(userContext);
  return (
    <div>
      <NavBar/>
      <Carousel/>
      {user && window.location.pathname !== '/cart' ? (<Product/>) : (<Login/>)}

   <div>
    <Outlet/>
   </div>
    </div>
  )
}

export default Home
