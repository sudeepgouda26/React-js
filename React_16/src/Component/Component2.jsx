import React, { useContext, useRef, useState } from 'react'
import { ThemeContextApi } from '../Context/ThemeContextApi'

const Component2 = () => {
    let {dark,light} =useContext(ThemeContextApi);


      let changeRef = useRef();
    
      const[toggle, setToggle] = useState(false);
      console.log(dark, light);
     let  handelchange =()=>{
        setToggle(!toggle);
      
      if(toggle){
        changeRef.current.style.backgroundColor = dark.BackGroundClour;
        
    
      }else{
        changeRef.current.style.backgroundColor = light.BackGroundClour;
      }
     }

  return (
    <div className='box'>
      
    </div>
  )
}

export default Component2
