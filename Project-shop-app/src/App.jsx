import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import User from './pages/User'
import Admin from './Admin/Admin'
import AddProduct from './Admin/AddProduct'
import AdminDashboard from './Admin/AdminDashboard'
import { AdminProvider } from './UserContext/AdminContext'
import Cart from './pages/Cart'


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
    path:'/cart',
    element:<Cart/>
  }
]
},{
    path:'/admin',
    element:<Admin/>,
    children:[{
      path:'/admin/add-product',
     element:<AddProduct/>
    },
    {
      path:"/admin/admin-dashboard",
      element:<AdminDashboard/>
    }
  ]
  }

])
const App = () => {
  return (
    <div>
      <AdminProvider>
      <RouterProvider router={router}/>
      </AdminProvider>
    </div>
  )
}

export default App
