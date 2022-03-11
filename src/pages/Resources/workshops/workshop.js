import React from 'react'
import './workshop.css'
import coming_soon from '../../../icons/Coming soon.png'
import AOS from 'aos';
import "aos/dist/aos.css"

function Workshop() {
  AOS.init({
    duration: 1000,
    offset:100,
    delay:200
  });
  return (
    <div className='workshop'>
      <h1 data-aos="zoom-in" data-aos-once="true">CAS-Workshops</h1>
      <img src={coming_soon} alt="coming soon" data-aos="zoom-in" data-aos-once="true"/>
    </div>
  )
}

export default Workshop