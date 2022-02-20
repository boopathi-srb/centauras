import React from 'react'
import './team.css'
// import team from '../../data';
// import logo from '../../components/topbar/CAS Logo.png'

function About(props) {

  const Team=props.data.team.map((item,pos)=>{
    return(
      <div className="team_wrapper">
      <div className="team_card">
       <div className="image_wrapper">
           <img key={pos} src={item.image} alt={item.Name}/>
       </div>
       <div>
         <div className="content_wrapper">
           <h2>{item.Name}</h2>
           <h4>{item.Position}</h4>
         </div>
         <div className="icon_wrapper">
           <a href={item.linkedin}>
             <img key={pos} src={item.linkedin} alt="linkedIn_icon"/>
           </a>
           <a href={item.instgram}>
             <img key={pos} src={item.instgram} alt="instagram_icon"/>
           </a>
           <a href={item.github}>
             <img key={pos} src={item.github} alt="github_icon"/>
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
        <div className="contentwrapper">
          <h1 className="heading">Team CAS-GCT</h1>
          <div className="content">
            <p >
             The performance of any club depends on the team members.<br/>
             The team members below are the pilots of each part of this CAS-GCT drone.
           </p>
          </div>
       </div>
      </div>
      <div className="taem_cardwrapper">
        {Team}
      </div>
    </div>
  )
}

export default About