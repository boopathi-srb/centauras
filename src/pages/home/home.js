import React from 'react'
import flyer from './flyer.png';
import './home.css';
import AOS from 'aos';


const Home=(props)=> {
  AOS.init({
    delay: 500
  });
   
  return (
    <div className="Home">
      <div data-aos="zoom-in-up" data-aos-once="true" >
        <img className="flyer" src={flyer} alt='BnT-flyer'></img>
      </div>
    </div>
     
  );

}
  
export default Home
