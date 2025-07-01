import React from 'react'
import HigherOrderComponent from './HigherOrderComponent'

const Register = (props) => {
    console.log(props.username);
    
  return (
    <div>
      
    </div>
  )
}

export default HigherOrderComponent(Register)
