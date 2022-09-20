import React from 'react';
import thumbsup from './thumbsup.png'
import './applied.css'
import AOS from 'aos';
import "aos/dist/aos.css";

function Applied() {
  AOS.init({
    duration:1000,
    offset:100,
    delay:200
  });
  return <div  className="applied">
    <div className="overlay" ></div>
    <div className="outerwrapper">
      <div  data-aos="zoom-out" data-aos-once="true" className="wrapper">
      <img className="thumbsup" src={thumbsup} alt="applied"/>
      <h1>Registerd!</h1>
      <p>
        Your registration has been recorded.<br/>
        We will contact you by Mail regarding your registration.<br/>Till then, please wait patiently🤗.
      </p>
      <a href="/"><b>Return to Home</b></a>
     </div>
    </div>
    
   
     
  </div>;
}

export default Applied;