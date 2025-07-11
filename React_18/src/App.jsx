import React from 'react'


import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Routes/Home'
import Product from './Routes/Product'
import Login from './Routes/Login'

let router = createBrowserRouter([
  {
    path: '/',
    element :<Home/>,
    children:[{
      path:"/login",
      element:<Login/>
    },
  {
    path:"/products",
    element:<Product/>
  }]
  }
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  )
}

export default App
