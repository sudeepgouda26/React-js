import React from 'react'

function Card() {

    const data =[
        {
            src:'https://images.unsplash.com/photo-1746483966755-273b467b24fa?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            heading: 'Heading 1',
            description: 'This is the description for heading 1.'
        },
        {
            src:'https://images.unsplash.com/photo-1742228900252-4ec66498a53c?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            heading: 'Heading 2',
            description: 'This is the description for heading 2.'
        },
        {
            src:'https://plus.unsplash.com/premium_photo-1749732738885-b1fcc64d586a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            heading: 'Heading 3',
            description: 'This is the description for heading 3.'
        },
        {
            src:'https://images.unsplash.com/photo-1742228900252-4ec66498a53c?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            heading: 'Heading 4',
            description: 'This is the description for heading 4.'
        }
    ]
  return (
    <div className='w=full h-screen bg-slate-200 flex justify-center items-center'>
        {data.map((value,index)=>(
              <div className='card w-[10vw] h-[30vh] bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between'>
            <div className='w-[100%] h-[50%] rounded-lg'>
                <img src={value.src}/>

            
            </div>

            <div className='w-[100%] h-[15%]'>
                <h2 className='text-lg font-bold'>{value.heading}</h2>

            </div>
             <div className='w-[100%] h-[15%]'>
                <h2 className='text-lg font-bold'>{value.description}</h2>

            </div>

        </div>
        ))}
      
      
    </div>
  )
}

export default Card
