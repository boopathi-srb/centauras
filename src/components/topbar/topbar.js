import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import './topbar.css';
import logo from "./CAS LogoNT.png";
import homeicon from './home icon.png';
import teamicon from './team icon.png';
import blogicon from './blog icon.png';
import contacticon from './contact icon.png';
import applyicon from './apply icon.png';
import AOS from 'aos';
import "aos/dist/aos.css"
import { data } from "jquery";
// import About from "../../pages/About/About";

const Topbar =()=>{
  AOS.init({
    duration: 1000,
    offset:100,
    delay:200
  });
const NavBar=document.getElementById("nav");
function close(){
  NavBar.className.toggle(" close")
  console.log("close");
}
const [isUser, setIsUser]=useState(false)
let user=localStorage.getItem("User")
console.log(user)
useEffect(()=>{
  if(user!==null){
    setIsUser(true);
  }
},[user,window.location.reload])
const removeUser=()=>{
  alert("Loggedout sucessfully")
   localStorage.removeItem("User");
   setIsUser(false)
}
  return (
    <div>
      <div className="topbar">
        <div className="logo_wrapper">
          <img classname="logo" src={logo} alt="logo" />
        </div>

        <div className="rightside">
          <input
            type="checkbox"
            id="toggle_button"
            className="toggle_button"
            aria-controls="nav"
            aria-expanded="false"
          ></input>
          <nav className="topbar_links close" id="nav">
            <div className="topbar_div">
              <NavLink
                onClick={close}
                class="link"
                id="links"
                activeclassname="active"
                exact
                to="/"
              >
                HOME
              </NavLink>
              <img src={homeicon} alt="homeicon"></img>
            </div>
            <div className="topbar_div">
              <NavLink
                onClick={close}
                class="link"
                id="links"
                activeclassname="active"
                exact
                to="/Team"
              >
                TEAM
              </NavLink>
              <img src={teamicon} alt="teamicon"></img>
            </div>
            <div className="topbar_div">
              <NavLink
                onClick={close}
                class="link"
                id="links"
                activeclassname="active"
                exact
                to="/Resources"
              >
                RESOURCES
              </NavLink>
              <img src={blogicon} alt="blogicon"></img>
            </div>
            <div className="topbar_div">
              <NavLink
                onClick={close}
                class="link"
                id="links"
                activeclassname="active"
                exact
                to="/Contact"
              >
                CONTACT
              </NavLink>
              <img src={contacticon} alt="contacticon"></img>
            </div>
            {isUser === true && (
              <div className="topbar_div">
                <h2 className="user">{user}</h2>
              </div>
            )}
            {isUser === true && (
              <div className="topbar_div">
                <h2 onClick={()=>removeUser()} className="logout">Log out</h2>
              </div>
            )}
            {isUser === false && (
              <div className="topbar_div">
                <NavLink
                  onClick={close}
                  class="link"
                  id="links"
                  activeclassname="active"
                  exact
                  to="/Apply"
                >
                  REGISTER
                </NavLink>
                <img src={applyicon} alt="applyicon"></img>
              </div>
            )}
          </nav>
          <label for="toggle_button" className="toggle_button_label">
            <span></span>
            <p>X</p>
          </label>
        </div>
      </div>
    </div>
  );
}
export default Topbar