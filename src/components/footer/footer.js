import React from 'react';
import './footer.css'
import LocationIcon from '../footer/locationicon.png'
import AOS from 'aos';
import "aos/dist/aos.css"

const Footer = () => {
  AOS.init(
    {
      duration:1000
    }
  );
  return (
    <div  className="footer">
      <div  data-aos="zoom-out"data-aos-once="true"  data-aos-offset="50px"  className="footer_wrapper1">
        <h3 className="footer_heading">Useful links</h3>
        <div className="footer_links" >
         <a href="/">Home</a>
         <a href="/Team">Team</a>
         <a href="/Blogs">Blogs</a>
         <a href="/Contact">Contact</a>
         <a href="/Apply">Register</a>
        </div>
      </div>
      <div  data-aos="zoom-out"data-aos-once="true" data-aos-offset="50px" className="footer_wrapper2">
          <h3 className="footer_heading">Social media</h3>
          <div className="footer_links">
          <a  href="https://www.instagram.com/" >Instagram</a>
          <a  href="https://www.linkedin.com/" >LinkedIn</a>
          <a  href="https://www.youtube.com/" >YouTube</a>
        </div>
      </div>
      <div  data-aos="zoom-out" data-aos-once="true" data-aos-offset="50px"  className="footer_wrapper3">
        <div className="footer_innerwrapper2">
         <img  src={LocationIcon} alt='locationicon'/>
         <p>Government College of Technology</p>
        </div>
      </div>
    </div>
  )
}

export default Footer