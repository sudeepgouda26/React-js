import React from 'react'

const Videoplay = ({play}) => {
    // console.log(play);
  return (
    <div className='flex items-center justify-center h-[100%] w-[100%] rounded-lg  '>
      <video className='h-[100%] w-[100%] rounded-3xl  ' controls muted autoPlay src={play} />
    </div>
  )
}

export default Videoplay
