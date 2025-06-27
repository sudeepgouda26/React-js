import React from 'react'
import Videoplay from './Videoplay'
import VideoItems from './VideoItems'

const Youtube = ({state,play,run}) => {
  return (
    <div>
      <div className='container'>
        <div>
            <Videoplay play={play}/>
        </div>
        <div>
            <VideoItems state={state} run={run}/>
        </div>

      </div>
    </div>
  )
}

export default Youtube
