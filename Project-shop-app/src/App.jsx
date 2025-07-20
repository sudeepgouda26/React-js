import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import User from './pages/User'
import Admin from './Admin/Admin'


const router =createBrowserRouter([{
  path:'/',
  element:<Home/>,
  children:[{
    path:'/login',
    element:<Login/>
  },
  {
    path:'/register',
    element:<Register/>
  },
  {
    path:'/user',
    element:<User/>
  },{
    path:'/admin',
    element:<Admin/>
  }
]
}

])
const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
