import React from "react";
import './topbar.css';
import logo from "./CAS Logo.png";
// import About from "../../pages/About/About";

const Topbar =()=>{
  return(
    <div>
     <div className="topbar">
       <div>
       </div>
      <img  classname="logo" src={logo} alt="logo"/>
      <div className="rightside">
       <input type="checkbox" id="toggle_button" className="toggle_button">
       </input>
       <nav className="topbar_links" >
         <a href="/">HOME</a>
         <a href="/About">ABOUT</a>
         <a href="/Blogs">BLOGS</a>
         <a href="/Contact">CONTACT</a>
         
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