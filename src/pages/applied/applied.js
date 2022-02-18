import React from 'react';
import thumbsup from './thumbsup.png'
import './applied.css'
import AOS from 'aos';
function Applied() {
  AOS.init();
  return <div  className="applied">
    <div className="overlay" ></div>
    <div className="outerwrapper">
      <div  data-aos="zoom-out"data-aos-once="true"  data-aos-delay="400" className="wrapper">
     
      <img className="thumbsup" src={thumbsup} alt="applied"/>
    
      <h1>Applied!</h1>
      <p>
        Your application has been recorded.<br/>
        We will contact you by Mail regarding membership.<br/>Till then, please wait patiently🤗.
      </p>
      <a href="/"><b>Return to Home</b></a>
     </div>
    </div>
    
   
     
  </div>;
}

export default Applied;