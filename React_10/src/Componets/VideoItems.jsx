import React, { Fragment } from 'react'

const VideoItems = ({state,run}) => {
    // console.log(state);
    // console.log(run);
    console.log(state);
    
    

;
    
  return (
    <div>
      {state.map((items)=>{
        console.log(items.thumbnailUrl);
        return <Fragment>
        <h3>{items.title}</h3>
            <img  onClick={()=>{run(items.videoUrl)}} height={300} width={300} src={items.thumbnailUrl} />
        </Fragment>
        
      })}
    </div>
  )
}

export default VideoItems
