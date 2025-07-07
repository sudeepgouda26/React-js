import React from 'react'

const Cart = ({cart}) => {
    console.log(cart);
    
  return (
    <div>
        {cart.map((item)=>{
            return <h2>{item.name}</h2>
        })}
      
    </div>
  )
}

export default Cart
