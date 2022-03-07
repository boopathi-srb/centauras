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
        <div className="Contact_rightside" ata-aos="zoom-in" data-aos-once="true">
          <h1 className="Contact_heading">Address</h1>
          <p className="content">
            Government College of Technology,Coimbatore-641013.
          </p>
        </div>
        <div className="Contact_leftside" ata-aos="zoom-in" data-aos-once="true">
        <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2710479817256!2d76.9338199143825!3d11.018278892157703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858dc68b80bbf%3A0x24bab8d60d2bc693!2sGovernment%20College%20of%20Technology%2C%20Coimbatore!5e0!3m2!1sen!2sin!4v1642244942957!5m2!1sen!2sin"
              height="420"
              title="Map"
              width="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
        </div>
      </div>
    </div>
  )
}
export default Contact