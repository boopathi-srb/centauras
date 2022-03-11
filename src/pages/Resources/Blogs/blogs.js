import React from 'react'
import './blogs.css'
import coming_soon from '../../../icons/Coming soon.png'

function Blogs() {
  return (
    <div className='blogs'>
      <h1>CAS-Blogs</h1>
      <img src={coming_soon} alt="coming soon"/>
    </div>
  )
}

export default Blogs