import React from 'react';
import './footer.css'
import LocationIcon from '../footer/locationicon.png'
// import logo from './instagram.png'
import AOS from 'aos';
const Footer = () => {
  AOS.init();
  return (
    <div  className="footer">
      <div  data-aos="zoom-in"data-aos-once="true"  data-aos-offset="50px"  className="footer_wrapper1">
        <h3 className="footer_heading">Useful links</h3>
        <div className="footer_links" >
         <a href="/">Home</a>
         <a href="/About">About</a>
         <a href="/Contact">Contact</a>
        </div>
      </div>
      <div  data-aos="zoom-in"data-aos-once="true" data-aos-offset="50px" className="footer_wrapper2">
          <h3 className="footer_heading">Social media</h3>
          <div className="footer_links">
          <a  href="https://www.instagram.com/" >Instagram</a>
          <a  href="https://www.linkedin.com/" >LinkedIn</a>
          <a  href="https://www.youtube.com/" >YouTube</a>
        </div>
      </div>
      <div  data-aos="zoom-in" data-aos-once="true" data-aos-offset="50px"  className="footer_wrapper3">
        <div className="footer_innerwrapper2">
         <img  src={LocationIcon} alt='locationicon'/>
         <p>Government College of Technology</p>
        </div>
      </div>
    </div>
  )
}

export default Footer