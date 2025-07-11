import React, { useContext } from 'react'
import { ThemeContextApi } from '../Context/ThemeContextApi';

const Component1 = () => {
    let {dark, light} = useContext(ThemeContextApi);
  return (
    <div>
      
    </div>
  )
}

export default Component1
