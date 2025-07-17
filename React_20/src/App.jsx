import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Components/Home'
import AddTrainer from './Components/AddTrainer'
import AllDetails from './Components/AllDetails'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'addTrainer',
        element: <AddTrainer />,
      },
      {
        path: 'alldetails',
        element: <AllDetails />,
      },
    ],
  },
]);
const App = () => {
  return (
     <div>
    <RouterProvider router={router} />
   

    </div>
  )
}

export default App
