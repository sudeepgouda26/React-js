import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import Login from './pages/Login'


const router =createBrowserRouter([{
  path:'/',
  element:<Home/>,
  children:[{
    path:'/login',
    element:<Login/>
  }]
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
