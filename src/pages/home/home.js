import React from 'react'
import logo from '../../components/topbar/CAS LogoNT.png';
import './home.css';
import AOS from 'aos';
import seminaricon from '../../icons/seminar.png'
import workshopicon from '../../icons/workshop.png'
import researchicon from '../../icons/research.png'
import competitionicon from '../../icons/competition.png'
import designicon from '../../icons/design.png'
import scrutinizeicon from '../../icons/scrutinize.png'


const Home=(props)=> {
  AOS.init({
    delay: 500
  });
   
  return (
    <div className="Home">
      <div  className="title_wrapper" data-aos="zoom-in-up" data-aos-once="true" >
        <div className="titleheading_wrapper">
          <h1>
            Centauras Aerospace Society
          </h1>
          <h3>
            Government College of Technology,<br/>Coimbatore.
          </h3>
        </div>
        <div className="titleimg_wrapper">
          <img src={logo} alt="logo"></img>
        </div>
      </div>


      <div className="home_outerwrapper1">
      <div className="home_wrapper1">
        <h1 className="home_headings1">
          Our Motto
        </h1>
        <div className="home_innerwrapper1" >
          <div className="home_innerwrapper1_child">
           <h4>
             EDUCATE
           </h4>
           <p>
           To educate the students on various disciplines related to aerospace and its subsidiaries.
            And also to get familiarized with diverse industrial cultures by interacting with the industrial people.
           </p>
          </div>
          <div className="home_innerwrapper1_child">
           <h4>
             INNOVATE
           </h4>
           <p>
           To apply the bleeding edge technology in the aerospace field to make 
           life easier and to design new products in a creative way which will yield more benefits to the whole world.
           </p>
          </div>
          <div className="home_innerwrapper1_child">
           <h4>
             AVIATE
           </h4>
           <p>
           To develop an aerial vehicle which can 
           fly, be easy to maneuver and can 
           actually be implemented in real life in an effective way.   
           </p>
          </div>
        </div>
      </div>
      </div>  



      <div className="home_outerwrapper2">
      <div className="home_wrapper2">
       <h1  data-aos="zoom-in-up" data-aos-once="true" className="home_headings2">
         What we do here?
       </h1>
       <div className="home_innerwrapper2">
         <div className="home_innerwrapper2_child">
           <img src={seminaricon} alt="seminaricon"/>
           <p  data-aos="zoom-in-up" data-aos-once="true">
             Enhance knowledge about various disciplines through seminars conducted by experts.
           </p>
         </div>
         <div className="home_innerwrapper2_child">
           <img src={workshopicon} alt="workshopicon"/>
           <p  data-aos="zoom-in-up" data-aos-once="true">
             Conduct workshops related to aerospace to share the knowledge with the society.
           </p>
         </div>
         <div className="home_innerwrapper2_child">
           <img src={designicon} alt="designicon"/>
           <p  data-aos="zoom-in-up" data-aos-once="true">
              Design and develop projects in the aerospace field.
           </p>
         </div>
         <div className="home_innerwrapper2_child">
           <img src={competitionicon} alt="competitionicon"/>
           <p  data-aos="zoom-in-up" data-aos-once="true">
              Conduct competition to promote interest among learners about innovation.
           </p>
         </div>
         <div className="home_innerwrapper2_child">
           <img src={scrutinizeicon} alt="scrutinizeicon"/>
           <p>
              Scrutinize the technical commodities in UAV.
           </p>
         </div>
         <div className="home_innerwrapper2_child">
           <img src={researchicon} alt="researchicon"/>
           <p>
              Encourage scientific research on aerial technology.
           </p>
         </div>
       </div>
      </div>
      </div>


      
      <div className="home_outerwrapper3">
      <div className="home_wrapper3">
        <div className="home_innerwrapper3">
        <h1 className="home_headings1">
          Vision
        </h1>
        <p className="vision">
        To explore and elucidate in the field of aerospace from the known to unknown and bring innovations for the development,
         betterment and benefit of mankind.
        </p>
        </div>
        <div className="home_innerwrapper3">
          <h1 className="home_headings1">
            Mission
          </h1>
          <p className="vision">
            To bring innovation in aerospace by enhancing our knowledge ,specializing in manufacturing,designing concepts and implementing 
            it through attending various competitions.
          </p>
        </div>
      </div>
      </div>
     
      
    </div>
     
  );

}
  
export default Home
