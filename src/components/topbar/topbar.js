import React from "react";
import './topbar.css';
import logo from "./CAS LogoNT.png";
import homeicon from './home icon.png';
import teamicon from './team icon.png';
import blogicon from './blog icon.png';
import contacticon from './contact icon.png';
import applyicon from './apply icon.png';
import AOS from 'aos';
import "aos/dist/aos.css"
// import About from "../../pages/About/About";

const Topbar =()=>{
  AOS.init({
    duration: 1000,
    offset:100,
    delay:400
  });
  return(
    <div>
     <div className="topbar">
       <div className="logo_wrapper">
          <img  classname="logo" src={logo} alt="logo"/>  
       </div>
      
      <div className="rightside">
       <input type="checkbox" id="toggle_button" className="toggle_button">
       </input>
      
       <nav className="topbar_links"  >
           <div className="topbar_div">
             <b></b>
             <b></b>
             <a class="link active" href="/">HOME</a>
             <img src={homeicon} alt="homeicon"></img>
           </div>
           <div className="topbar_div">
             <a  class="link" href="/Team">TEAM</a>
             <img src={teamicon} alt="teamicon"></img>
           </div>
           <div className="topbar_div">
             <a class="link" href="/Resources">RESOURCES</a>
             <img src={blogicon} alt="blogicon"></img>
           </div>
           <div className="topbar_div">
             <a class="link" href="/Contact">CONTACT</a>
             <img src={contacticon} alt="contacticon"></img>
           </div>
           <div className="topbar_div">
             <a class="link" href="/Apply">REGISTER</a>
             <img src={applyicon} alt="applyicon"></img>
           </div>
       </nav>
       <label for="toggle_button" className="toggle_button_label">
         <span></span>
         <p>X</p>
       </label>
      </div>
     </div>
    </div>
  )
}
export default Topbar