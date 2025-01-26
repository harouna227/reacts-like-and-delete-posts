import React from 'react'

export default function Navbar({nombreDeLike}) {
  return (
    <div className='nav'>
      <h3 >Liste des posts liker: {nombreDeLike}</h3>
    </div>
  )
}
