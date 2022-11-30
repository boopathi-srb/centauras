import React from 'react';
import thumbsup from './thumbsup.png'
import './applied.css'
import AOS from 'aos';
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

function Applied() {
  AOS.init({
    duration:1000,
    offset:100,
    delay:200
  });
  const navigate = useNavigate();
  return <div  className="applied">
    <div className="overlay" ></div>
    <div className="outerwrapper">
      <div  data-aos="zoom-out" data-aos-once="true" className="wrapper">
      <img className="thumbsup" src={thumbsup} alt="applied"/>
      <h1>Registerd!</h1>
      <p>
        You have successfully signed up!<br/>
        {/* We will contact you by Mail regarding your Pass for the workshop.<br/>Till then, please wait patiently🤗. */}
      </p>
      <a onClick={()=>navigate('/signin')}><b>Sign In</b></a>
     </div>
    </div>
    
   
     
  </div>;
}

export default Applied;