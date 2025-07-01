import React from 'react'


const HigherOrderComponent = (User) => {
   function max() {
    return <div>
     <User username={"sudeep"} ></User>

     
     </div>
   }
   return max;
}

export default HigherOrderComponent
