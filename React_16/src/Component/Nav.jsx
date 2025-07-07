import { useContext, useRef, useState } from 'react'
import { ThemeContextApi } from '../Context/ThemeContextApi'

const Nav = () => {
  
  let changeRef = useRef();
  let {dark,light} = useContext(ThemeContextApi);
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
    <div>
      <nav id='navbar' ref={changeRef}>
       < button onClick={handelchange}>{toggle ? "dark": " lihgt"} </button>
      </nav>
    </div>
  )
}

export default Nav
