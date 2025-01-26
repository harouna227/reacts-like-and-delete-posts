import React from 'react'

export default function Post({data, liker, supression}) {
    // console.log(props)
  return (
    <div className='post'>
        <div>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
        </div>
        <div className='btn'>
          <button className={data.liker ? "button liked" : "liker"} 
          onClick={() => liker(data)}>
            {data.liker ? "liked" : "liker"}           
          </button>
            <button className='delete' onClick={
              ()=> supression(data.id)}>
              Delete</button>
            
        </div>
    </div>
  )
}
