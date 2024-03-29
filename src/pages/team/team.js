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
    delay:200
  });
  const Team=props.data.team.map((item,pos)=>{
    return(
      <div className="team_wrapper">
      <div className="team_card" data-aos="zoom-in"data-aos-once="true">
       <img key={pos} src={item.image} alt={item.Name}/>
       <div className="content_outerwrapper">
         <div className="content_wrapper">
           <h3>{item.Name}</h3>
           <h5>{item.Position}</h5>
           <h6>{item.Portfolio}</h6>
         </div>
         <div className="icon_wrapper">
           {item.LinkedIn && (<a href={item.LinkedIn}>
             <img key={pos} src={linkedin} alt="linkedIn_icon"/>
           </a>)}
           {item.Instgram && (<a href={item.Instgram}>
             <img key={pos} src={instagram} alt="instagram_icon"/>
           </a>)}
           {item.Github && (<a href={item.Github}>
             <img key={pos} src={github} alt="github_icon"/>
           </a>)}
          
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
          <h1 className="heading" data-aos="zoom-in" data-aos-once="true">Team CAS-GCT</h1>
          <div className="desc" >
            <p data-aos="zoom-in" data-aos-once="true">
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