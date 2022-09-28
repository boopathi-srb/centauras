import React from 'react'
import './contact.css'
import AOS from 'aos';
import "aos/dist/aos.css"

const Contact = () => {
  AOS.init({
    duration: 1000,
    offset:100,
    delay:200
  });
  return (
    <div className="Contact">
      <div className="Contact_wrapper">
        <div className="Contact-wrapper1" data-aos="zoom-in" data-aos-once="true">
          <h1 className="Contact_heading">Address</h1>
          <div  className="content">
           <p>
             Government College of Technology,Coimbatore-641013.
           </p> 
          </div>
          
        </div>
        <div className='Contact-wrapper1' data-aos="zoom-in" data-aos-once="true">
         <h1 className="Contact_heading">Social Media</h1>
         <div className='content'>
           <a  href="https://instagram.com/cas_gct?utm_medium=copy_link" >Instagram</a><br></br>
           <a  href="https://www.linkedin.com/company/centaurus-aerospace-society-gct" >LinkedIn</a>
         </div>
        </div>
      </div>
      <div className='Contact_wrapper'>
       <div className='Contact-wrapper1' data-aos="zoom-in" data-aos-once="true">
        <h1 className="Contact_heading">Email</h1>
        <div className='content'>
          <p>casgct@gmail.com</p>
        </div>
       </div>

       <div className='Contact-wrapper1' data-aos="zoom-in" data-aos-once="true">
        <h1 className="Contact_heading">Contact</h1>
        <div className='content'>
          <p>+91 7373-451-115</p>
        </div>
       </div>
      </div>
    </div>
  )
}
export default Contact