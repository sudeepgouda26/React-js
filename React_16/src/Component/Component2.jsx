import React, { useContext } from 'react'
import { ThemeContextApi } from '../Context/ThemeContextApi'

const Component2 = () => {
    let {dark,light} =useContext(ThemeContextApi);

  return (
    <div className='box'>
      
    </div>
  )
}

export default Component2
