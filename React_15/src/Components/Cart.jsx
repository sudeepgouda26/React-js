import React from 'react'
import { ContextApi } from '../ConteaxtApi/ContextApi'
const Cart = () => {
  return (
    <div>
    <ContextApi.Consumer>
        {(value)=>{
            console.log(value);
            
        }}
    </ContextApi.Consumer>
    
  
    </div>
  )
}

export default Cart
