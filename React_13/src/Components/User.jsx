import React from 'react'
import HigherOrderComponent from './HigherOrderComponent'
const User = (props) => {
  console.log(props.username);
  return (
    <div>
      <h2>User Component</h2>
    </div>
  )
}

export default HigherOrderComponent(User)
