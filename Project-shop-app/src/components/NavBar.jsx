import React from 'react'
import Logo from './Logo'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import SearchBar from './SearchBar'
import Userlogo from './Userlogo'

const NavBar = () => {
    let color="#525A66"
  return (
    <div className="flex items-center justify-center gap-6 px-8 py-4  backdrop-blur-md  shadow-2xl" style={{ backgroundColor: color }}>

    <Logo/>
    <SearchBar/>
    <Home/>
    <Contact/>
    <About/>
    <Userlogo/>
    </div>
  )
}

export default NavBar
