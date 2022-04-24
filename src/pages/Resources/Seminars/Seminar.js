import React from 'react'
import '../events/events.css'
import linkedin from '../../../icons/linkedin.png'
import instagram from '../../../icons/instagram.png'
import AOS from 'aos';
import "aos/dist/aos.css"

window.addEventListener('load', AOS.refresh)

function Seminar(props) {
  AOS.init({
    duration: 1000,
    offset:100,
    delay:200
  });
  const Seminar=props.data.seminars.map((item,pos)=>{
    return(
      <div className="event_wrapper">
      <div className="event_card" data-aos="zoom-in"data-aos-once="true">
       
       <div className="event_content_outerwrapper">
         <div className="event_content_wrapper">
           <h3>{item.Eventname}</h3>
           <h6>{item.Description}</h6>
         </div>
         <img key={pos} src={item.Poster} alt={item.Name}/>
         <div className="event_content_wrapper">
           <h3>{item.Speaker}</h3>
           <h6>{item.SpeakerPosition}</h6>
         </div>
         <div className="icon_wrapper">
           {item.LinkedIn && (<a href={item.LinkedIn}>
             <img key={pos} src={linkedin} alt="linkedIn_icon"/>
           </a>)}
           {item.Insta && (<a href={item.Insta}>
             <img key={pos} src={instagram} alt="instagram_icon"/>
           </a>)}
         </div>
       </div>
      </div>
      </div>
     
    )
  });
  return (
    <div className='playlist'>
      <h1 data-aos="zoom-in" data-aos-once="true">CAS-Seminars</h1>
      <div className='Events_card_'>
        {Seminar}
      </div>
    </div>
  )
}
export default Seminar