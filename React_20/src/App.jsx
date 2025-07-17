import React, { Children } from 'react'
import {createBrowserRouter} from 'react-router-dom'
import Home from './Components/Home'
import AddTrainer from './Components/AddTrainer'
import AllDetails from './Components/AllDetails'



let router = createBrowserRouter([{
  path: '/',
  element:<Home/>,
  Children:[{
    path:'/addTrainer',
  element:<AddTrainer/>,
},{
 path:'/alldetails',
  element: <AllDetails/>
}
]
}])
const App = () => {
  return (
    <div>
      
    </div>
  )
}

export default App
