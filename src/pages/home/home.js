import React from 'react'
import logo from '../../components/topbar/CAS LogoNT.png';
import './home.css';
import AOS from 'aos';
import "aos/dist/aos.css"
import seminaricon from '../../icons/seminar.png'
import workshopicon from '../../icons/workshop.png'
import researchicon from '../../icons/research.png'
import competitionicon from '../../icons/competition.png'
import designicon from '../../icons/design.png'
import scrutinizeicon from '../../icons/scrutinize.png'


const Home=(props)=> {
  AOS.init({
    duration: 1000,
    offset:100
  });
   
  return (
    <div className="Home">
      <div  className="title_wrapper" >
        <div className="titleheading_wrapper"  data-aos="zoom-out"data-aos-once="true">
          <div className="titleheading_wrapper1">
          <div className="titleheading_innerwrapper">
          <h1>C</h1><h2>entauras</h2> 
          </div>
          <div className="titleheading_innerwrapper">
          <h1>A</h1><h2>erospace</h2> 
          </div>
          <div className="titleheading_innerwrapper">
          <h1>S</h1><h2>ociety</h2>
          </div>
          </div>
          <div className="title_description">
           <h3>
             Government College of Technology,<br/>Coimbatore.
           </h3>
          </div>
          
        </div>
        <div className="titleimg_wrapper"  data-aos="zoom-out"data-aos-once="true"  >
          <img src={logo} alt="logo"></img>
        </div>
      </div>


      <div className="home_outerwrapper1">
      <div className="home_wrapper1">
        <h1 className="home_headings1" data-aos="zoom-out" data-aos-once="true"  >
          Our Motto
        </h1>
        <div className="home_innerwrapper1" >
          <div className="home_innerwrapper1_child"  >
           <h4 data-aos="zoom-out" data-aos-once="true" >
             EDUCATE
           </h4>
           <p data-aos="zoom-out" data-aos-once="true" >
           To educate the students on various disciplines related to aerospace and its subsidiaries.
            And also to get familiarized with diverse industrial cultures by interacting with the industrial people.
           </p>
          </div>
          <div className="home_innerwrapper1_child" >
           <h4 data-aos="zoom-out" data-aos-once="true" >
             INNOVATE
           </h4>
           <p data-aos="zoom-out" data-aos-once="true" >
           To apply the bleeding edge technology in the aerospace field to make 
           life easier and to design new products in a creative way which will yield more benefits to the whole world.
           </p>
          </div>
          <div className="home_innerwrapper1_child" >
           <h4 data-aos="zoom-out" data-aos-once="true" >
             AVIATE
           </h4>
           <p data-aos="zoom-out" data-aos-once="true" >
           To develop an aerial vehicle which can 
           fly, be easy to maneuver and can 
           actually be implemented in real life in an effective way.   
           </p>
          </div>
        </div>
      </div>
      </div>  



      <div className="home_outerwrapper2" >
      <div className="home_wrapper2">
       <h1  data-aos="zoom-out" data-aos-once="true"  data-aos-delay="400" className="home_headings2">
         What we do here?
       </h1>
       <div className="home_innerwrapper2">
         <div className="home_innerwrapper2_child"  >
           <img src={seminaricon} alt="seminaricon" data-aos="zoom-out" data-aos-once="true" />
           <p data-aos="zoom-out" data-aos-once="true"  >
             Enhance knowledge about various disciplines through seminars conducted by experts.
           </p>
         </div>
         <div className="home_innerwrapper2_child"  >
           <img src={workshopicon} alt="workshopicon" data-aos="zoom-out" data-aos-once="true" />
           <p data-aos="zoom-out" data-aos-once="true" >
             Conduct workshops related to aerospace to share the knowledge with the society.
           </p>
         </div>
         <div className="home_innerwrapper2_child" >
           <img src={designicon} alt="designicon"  data-aos="zoom-out" data-aos-once="true" />
           <p  data-aos="zoom-out" data-aos-once="true">
              Design and develop projects in the aerospace field.
           </p>
         </div>
         <div className="home_innerwrapper2_child"  >
           <img src={competitionicon} alt="competitionicon"  data-aos="zoom-out" data-aos-once="true" />
           <p  data-aos="zoom-out" data-aos-once="true">
              Conduct competition to promote interest among learners about innovation.
           </p>
         </div>
         <div className="home_innerwrapper2_child"   >
           <img src={scrutinizeicon} alt="scrutinizeicon" data-aos="zoom-out" data-aos-once="true"/>
           <p data-aos="zoom-out" data-aos-once="true">
              Scrutinize the technical commodities in UAV.
           </p>
         </div>
         <div className="home_innerwrapper2_child"   >
           <img src={researchicon} alt="researchicon" data-aos="zoom-out" data-aos-once="true"/>
           <p data-aos="zoom-out" data-aos-once="true">
              Encourage scientific research on aerial technology.
           </p>
         </div>
       </div>
      </div>
      </div>


      
      <div className="home_outerwrapper3">
      <div className="home_wrapper3">
        <div className="home_innerwrapper3" >
        <h1 className="home_headings1"  data-aos="zoom-out" data-aos-once="true"  >
          Vision
        </h1>
        <p className="vision"  data-aos="zoom-out" data-aos-once="true" >
        To explore and elucidate in the field of aerospace from the known to unknown and bring innovations for the development,
         betterment and benefit of mankind.
        </p>
        </div>
        <div className="home_innerwrapper3" >
          <h1 className="home_headings1"  data-aos="zoom-out" data-aos-once="true" >
            Mission
          </h1>
          <p className="vision"  data-aos="zoom-out" data-aos-once="true" >
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
