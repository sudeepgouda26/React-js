import React from 'react'
import Videoplay from './Videoplay'
import VideoItems from './VideoItems'

const Youtube = ({state,play,run}) => {
  return (
    <div>
      <div className='container flex relative justify-between p-7 w-[100vw] h-[100vh]'>
        <div className='w-[60vw] h-[70vh]'>
            <Videoplay play={play} />
        </div>
        <div className='w-[35vw] h-[90vh]  overflow-y-scroll '>
            <VideoItems state={state} run={run}/>
        </div>

      </div>
    </div>
  )
}

export default Youtube
