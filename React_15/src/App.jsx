import React from 'react'
import ContextProvider from './ConteaxtApi/ContextApi'
import Cart from './Components/Cart'
import Product from './Components/Product'

const App = () => {
  return (
    <div>

      <ContextProvider>
        <Cart></Cart>
       <Product></Product>
       
      </ContextProvider>
      
    </div>
  )
}

export default App
