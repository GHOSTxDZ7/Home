import React from 'react'

export default function Home(props) {

  return (
      <div className="home" >
        <img src={props.imageSrc} alt="earthly" />
        <h1 className='title'>{props.title}</h1>
      </div>
  )
}

