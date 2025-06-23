import React, { Component } from 'react'
import Logo from './Logo'
import Search from './Search'
import Home from './Home'
import Contact from './Contact'
export default class Nav extends Component {
  render() {
    return (
      <div id='nav'>
      <Logo/>
      <Search/>
      <Home/>
      <Contact/>
      </div>
    )
  }
}
