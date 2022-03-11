import React from 'react'
import './webinar.css'
import coming_soon from '../../../icons/Coming soon.png'

function Webinar() {
  return (
    <div className='webinar'>
      <h1>CAS-Webinars</h1>
      <img src={coming_soon} alt="coming soon"/>
    </div>
  )
}

export default Webinar