import React from 'react'

const Videoplay = ({play}) => {
    // console.log(play);
  return (
    <div>
      <video controls muted autoPlay src={play} />
    </div>
  )
}

export default Videoplay
