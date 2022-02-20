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
      <div className="home_wrapper">
       <h1  data-aos="zoom-in-up" data-aos-once="true" className="home_headings">
         What we do here?
       </h1>
       <div className="home_innerwrapper">
        <p  data-aos="zoom-in-up" data-aos-once="true">
          Enhance knowledge about various disciplines through seminars conducted by experts.
        </p>
        <p  data-aos="zoom-in-up" data-aos-once="true">
          Conduct workshops related to aerospace to share the knowledge with the society.
        </p>
        <p  data-aos="zoom-in-up" data-aos-once="true">
          Design and develop projects in the aerospace field.
        </p>
        <p  data-aos="zoom-in-up" data-aos-once="true">
          Conduct competition to promote interest among learners about innovation.
        </p>
        <p>
          Scrutinize the technical commodities in UAV.
        </p>
        <p>
          Encourage scientific research on aerial technology.
        </p>
       </div>
      </div>
      <div className="home_wrapper">
        <h1 className="home_headings">
          Our Motto
        </h1>
        <div className="home_innerwrapper" >
          <div className="home_innerwrapper1">
           <h5>
             EDUCATE
           </h5>
           <p>
           To educate the students on various disciplines related to aerospace and its subsidiaries.
            And also to get familiarized with diverse industrial cultures by interacting with the industrial people.
           </p>
          </div>
          <div className="home_innerwrapper1">
           <h5>
             INNOVATE
           </h5>
           <p>
           To apply the bleeding edge technology in the aerospace field to make 
           life easier and to design new products in a creative way which will yield more benefits to the whole world.
           </p>
          </div>
          <div className="home_innerwrapper1">
           <h5>
             AVIATE
           </h5>
           <p>
           To develop an aerial vehicle which can 
           fly, be easy to maneuver and can 
           actually be implemented in real life in an effective way.   
           </p>
          </div>
        </div>
      </div>
      <div className="home_wrapper">
        <h1 className="home_headings">
          Vision
        </h1>
        <p className="vision">
        To explore and elucidate in the field of aerospace from the known to unknown and bring innovations for the development,
         betterment and benefit of mankind.
        </p>
      </div>
      <div className="home_wrapper">
        <h1 className="home_headings">
          Mission
        </h1>
        <p className="vision">
        To bring innovation in aerospace by enhancing our knowledge ,specializing in manufacturing,designing concepts and implementing 
        it through attending various competitions.
        </p>
      </div>
    </div>
     
  );

}
  
export default Home
