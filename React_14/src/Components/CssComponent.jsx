import React from 'react'
import Hoc from './Hoc'
const CssComponent = (props) => {
    console.log(props.color);
  return (
    <div className="h-[30vh] w-[30vw] bg-gray-200">
     <h2>hello</h2>
    </div>
  )
}

export default Hoc(CssComponent)
