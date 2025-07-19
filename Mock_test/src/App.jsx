// import { useState } from 'react'
// import ProductIItems from './Components/Product/ProductIItems'
// import Cart from './Components/Cart'
// import React from 'react'

// const App = () => {
//   let [cart,setCart] = useState([])
//   let product = [
//     {name : "phone A"},
//     {name : "phone B"}
//   ]
//  let addtoCart =(product)=>{
//   console.log(product)
//   setCart([...cart,product])

//   }
//   return (
//     <div>
//       <ProductIItems values={product} addtoCart={addtoCart}/>
//       <Cart cart={cart} />
  
//     </div>
//   )
// }

// export default App

import React from 'react'
import ApiHandeling from './Mock2/ApiHandeling'
import Register from './Mock2/Register'

const App = () => {
  return (
    <div>
      {/* <ApiHandeling/> */}
      <Register/>
    </div>
  )
}

export default App

