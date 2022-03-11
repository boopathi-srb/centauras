import React from 'react'
import './workshop.css'
import coming_soon from '../../../icons/Coming soon.png'

function Workshop() {
  return (
    <div className='workshop'>
      <h1>CAS-Workshops</h1>
      <img src={coming_soon} alt="coming soon"/>
    </div>
  )
}

export default Workshop