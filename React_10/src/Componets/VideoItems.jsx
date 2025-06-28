import React, { Fragment } from 'react'

const VideoItems = ({state,run}) => {
    // console.log(state);
    // console.log(run);
    console.log(state);
    
    

;
    
  return (
    <div className='flex flex-col gap-2 p-5 items-center'>
      {state.map((items)=>{
        console.log(items.thumbnailUrl);
        return <Fragment>
          <div className='w-[300px] h-[300px] flex flex-col items-center justify-center bg-amber-100 p-5 rounded-lg shadow-lg'>
            <img className='h-[260px] w-[100%]' onClick={()=>{run(items.videoUrl)}}  src={items.thumbnailUrl} />
            
        <h3>{items.title}</h3>
          </div>
            
        </Fragment>
        
      })}
    </div>
  )
}

export default VideoItems
