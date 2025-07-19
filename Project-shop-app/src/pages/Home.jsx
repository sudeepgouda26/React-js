import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import Carousel from './Carousel'

const Home = () => {
  return (
    <div>
      <NavBar/>
      <Carousel/>
   <div>
    <Outlet/>
   </div>
    </div>
  )
}

export default Home
