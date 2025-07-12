import React from 'react'
import { Link, Outlet } from 'react-router'

const Product = () => {
  return (
    <div>
      <Link to="/products/dress">Dress Page</Link>
      <Link to="/products/shoes">Shoes page</Link>
       <div>
        <Outlet></Outlet>
    </div>
    </div>
   
  )
}

export default Product
