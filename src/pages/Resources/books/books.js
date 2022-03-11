import React from 'react'
import './books.css'
import coming_soon from '../../../icons/Coming soon.png'

function Books() {
  return (
    <div className='books'>
      <h1>CAS-Books</h1>
      <img src={coming_soon} alt="coming soon"/>
    </div>
  )
}

export default Books