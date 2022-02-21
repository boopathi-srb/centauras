import React from 'react'
import './team.css'
import linkedin from '../../icons/linkedin.png'
import instagram from '../../icons/instagram.png'
import github from '../../icons/github.png'
import AOS from 'aos';
import "aos/dist/aos.css"

function About(props) {
  AOS.init({
    duration: 1000,
    offset:100,
    delay:400
  });
  const Team=props.data.team.map((item,pos)=>{
    return(
      <div className="team_wrapper">
      <div className="team_card" data-aos="zoom-out"data-aos-once="true">
       <img key={pos} src={item.image} alt={item.Name}/>
       <div className="content_outerwrapper">
         <div className="content_wrapper">
           <h3>{item.Name}</h3>
           <h5>{item.Position}</h5>
         </div>
         <div className="icon_wrapper">
           <a href={item.linkedin}>
             <img key={pos} src={linkedin} alt="linkedIn_icon"/>
           </a>
           <a href={item.instgram}>
             <img key={pos} src={instagram} alt="instagram_icon"/>
           </a>
           <a href={item.github}>
             <img key={pos} src={github} alt="github_icon"/>
           </a>
         </div>
       </div>
      </div>
      </div>
     
    )
  });
  return (
    <div className="team">
      <div className="team_wrapper">
        <div className="contentwrapper"  >
          <h1 className="heading" data-aos="zoom-out" data-aos-once="true">Team CAS-GCT</h1>
          <div className="content" >
            <p data-aos="zoom-out" data-aos-once="true">
             The performance of any club depends on the team members.<br/>
             The team members below are the pilots of this CAS-GCT drone.
           </p>
          </div>
       </div>
      </div>
      <div className="team_cardwrapper">
        {Team}
      </div>
    </div>
  )
}

export default About