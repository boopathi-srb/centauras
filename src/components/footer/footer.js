import React from 'react';
import './footer.css'
import LocationIcon from '../footer/locationicon.png'
import AOS from 'aos';
import "aos/dist/aos.css"

const Footer = () => {
  AOS.init(
    {
      duration:1000,
      offset:100,
      delay:200
    }
  );
  return (
    <div  className="footer">
      <div className="footer-outerwrapper">
      <div className="footer_wrapper1" data-aos="zoom-in" data-aos-once="true">
        <h3 className="footer_heading">Useful links</h3>
        <div className="footer_links" >
         <a href="/">Home</a>
         <a href="/Team">Team</a>
         <a href="/Resources">Resources</a>
         <a href="/Contact">Contact</a>
         <a href="/Apply">Register</a>
        </div>
      </div>
      <div  className="footer_wrapper2" data-aos="zoom-in" data-aos-once="true">
          <h3 className="footer_heading">Social media</h3>
          <div className="footer_links">
          <a  href="https://instagram.com/cas_gct?utm_medium=copy_link" >Instagram</a>
          <a  href="https://www.linkedin.com/company/centaurus-aerospace-society-gct" >LinkedIn</a>
          {/* <a  href="https://www.youtube.com/" >YouTube</a> */}
         </div>
      </div>
      <div   className="footer_wrapper3">
        <div className="footer_innerwrapper2" data-aos="zoom-in" data-aos-once="true">
         <img  src={LocationIcon} alt='locationicon'/>
         <p>Government College of Technology</p>
        </div>
      </div>
      </div>
     
     <div className="footer-outerwrapper">
       <p>©️ Centaurus Aerospace Society - All Rights Reserved</p>

     </div>
    </div>
  )
}

export default Footer