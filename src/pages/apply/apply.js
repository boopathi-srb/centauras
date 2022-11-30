import React, { useState } from 'react';
import  './apply.css';
import AOS from 'aos';
import coming_soon from '../../icons/Coming soon.png'
import "aos/dist/aos.css"
import launch_pad from "../../Posters/launch_pad.jpeg"
import DotLoader from "./loader"
import {useNavigate} from 'react-router-dom'
import { post } from 'jquery';

// JS code for posting into google sheets

// window.onload=function(){
//   var form = document.getElementById('sheetdb-form');
//   form.addEventListener("submit", e => {  
//     e.preventDefault();
//     fetch(form.action, {
//         method : "POST",
//         body: new FormData(document.getElementById("sheetdb-form")),
//     }).then(
//         response => response.json()
//     ).then(() => {
//       window.open( "/Applied", "_self");
//     });
  
//   });
// }



const Apply=(props)=> {
  AOS.init({
    duration:1000,
    offset:100,
    delay:200
  });
  // const[load, setload]=useState(false)
  const navigate =useNavigate()
  const [name, setName]=useState("")
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const [year, setYear]=useState("")
  const [department,setDepartment]=useState("")

  const registerUser=async (e)=>{
    e.preventDefault();
    console.log(name, email,password,year,department)
    const response = await fetch("http://localhost:6030/user/signup",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
    
      body:JSON.stringify({name,email,password,year,department})
    });

    const data=await response.json()
    console.log(data);
    if(data){
      console.log(data)
      navigate('/Applied')
    }
  }
 
  return (
    <div className="apply">
      {/* <img src={coming_soon} alt="coming soon" data-aos="zoom-in" data-aos-once="true"/> */}
      <div className="apply_wrapper" data-aos="zoom-in" data-aos-once="true">
        <h1 className="Apply_heading">Sign-Up</h1>
        {/* <img className='launchpad' src={launch_pad}></img> */}
      </div>

      {/* Form area */}

      <form
        // action="https://sheetdb.io/api/v1/6dj9s537etzgz"
        onSubmit={registerUser}
        method="post"
        id="sheetdb-form"
        className="form"
        autoComplete="on"
        data-aos="zoom-in"
        data-aos-once="true"
      >
        <div>
          <label for="Name">Name</label>
          <input
            required
            type="text"
            placeholder="Enter your Full name"
            name="data[Name]"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </div>
        {/* <div>
            <label for="Roll number">Roll Number</label>
            <input required type="text" placeholder='Enter your Roll number' name="data[Roll no]"  />
          </div> */}
        {/* <div>
            <label for="Email">Email - personal</label>
            <input required type="email" placeholder='Enter your personal Mail-Id' name="data[Mail ID]" />
          </div> */}
        <div>
          <label for="Email">Email - GCT</label>
          <input
            required
            type="email"
            placeholder="Enter your GCT Mail-Id"
            name="data[GCT mail ID]"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </div>
        {/* <div>
            <label for="Number">Contact Number</label>
            <input required type="text" minLength="10" maxLength="10" pattern="[0-9]{10}" placeholder='Enter your Contact number' name="data[contact number]"  />
          </div> */}
        {/* <div>
            <label for="Number">WhatsApp Number</label>
            <input required type="text" minLength="10" maxLength="10" pattern="[0-9]{10}" placeholder='Enter your WhatsApp number' name="data[whatsapp number]"  />
          </div> */}
        <div>
          <label for="Year of study">Year of study</label>
          <select
            required
            className="selection"
            name="data[Year]"
            onInput={(e) => {
              setYear(e.target.value);
            }}
            value={year}
          >
            <option style={{ display: "hidden" }}></option>
            <option
              onClick={(e) => {
                setYear(e.target.value);
              }}
            >
              2nd Year
            </option>
            <option
              onClick={(e) => {
                setYear(e.target.value);
              }}
            >
              3rd Year
            </option>
            <option
              onClick={(e) => {
                setYear(e.target.value);
              }}
            >
              4th Year
            </option>
          </select>
        </div>
        <div>
          <label for="Department">Department</label>
          {/* <input
            type="text"
            maxLength="20"
            placeholder="Enter the departmentof study"
            name="data[Department]"
            
          ></input> */}
          <select
            required
            className="selection"
            name="Department"
            onInput={(e) => {
              setDepartment(e.target.value);
            }}
            value={department}
          >
            <option style={{ display: "hidden" }}></option>
            <option
              onClick={(e) => {
                setDepartment(e.target.value);
              }}
            >
              CIVIL
            </option>
            <option
              onClick={(e) => {
                setDepartment(e.target.value);
              }}
            >
              MECH
            </option>
            <option
              onClick={(e) => {
                setDepartment(e.target.value);
              }}
            >
              PROD
            </option>
            <option
              onClick={(e) => {
                setDepartment(e.target.value);
              }}
            >
              IBT
            </option>
            <option
              onClick={(e) => {
                setDepartment(e.target.value);
              }}
            >
              EEE
            </option>
            <option
              onClick={(e) => {
                setDepartment(e.target.value);
              }}
            >
              ECE
            </option>
            <option
              onClick={(e) => {
                setDepartment(e.target.value);
              }}
            >
              EIE
            </option>
            <option
              onClick={(e) => {
                setDepartment(e.target.value);
              }}
            >
              IT
            </option>
            <option
              onClick={(e) => {
                setDepartment(e.target.value);
              }}
            >
              CSE
            </option>
          </select>
        </div>
        {/* <div>
          <label for="Instagram handle ">Transaction ID</label>
            <input required type="text" maxLength="100" placeholder="Enter the transaction ID of your payment" name="data[transaction ID] "></input>
          </div> */}
        {/* <div>
            <label for="Date of birth">Date of Birth</label>
            <input type="date" placeholder="Enter your DOB" name="data[Date of Birth]"/>
          </div>
          <div>
          <label for="Instagram handle ">Instagram ID</label>
            <input type="text" maxLength="100" placeholder="Enter the link of your insta-id" name="data[Instagram]"></input>
          </div>
          <div>
          <label for="LinkedIn handle ">LinkedIn ID</label>
            <input type="text" maxLength="100" placeholder="Enter your LinkedIn id" name="data[LinkedIn]"></input>
          </div>
          <div>
            <label for="Address">Address</label>
            <textarea type="text" rows="6" cols="50" placeholder="Enter your correct address" size="30" name="data[Address]" />
          </div>
          <div>
            <label for="Number">Area of interest</label>
            <input type="text"   placeholder='Enter your area of interest' name="data[Interest]"  />
          </div> */}
        <div>
          <label for="Password">Password</label>
          <input
            required
            type="password"
            placeholder="Password"
            name="data[Name]"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
        </div>
        <div className="already">
          <p>Already an user?</p>
          <p onClick={() => navigate("/Signin")}>Sign in here!</p>
        </div>
        <div>
          <input type="submit" className="button" value={"Sign-up"}></input>
        </div>
      </form>
    </div>
  );
}

export default Apply;