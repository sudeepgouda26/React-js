import React from 'react'
import Hoc from './Hoc'

const Nav = ({color, ChangeColor}) => {
    // const [state, setState] = React.useState(Object.values(props.color[0]));

    console.log(Object.values(color)[0]);

    return (
        <div className='w-[100vw] h-[20vh] bg-gray-200 border-2 border-black flex justify-between items-center'>
            <button onClick={()=>(ChangeColor(color))}>Color</button>
        </div>
    )
}

export default Hoc(Nav)