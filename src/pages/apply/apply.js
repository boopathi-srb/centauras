import React from 'react';
import  './apply.css';
import AOS from 'aos';
import "aos/dist/aos.css"
import launch_pad from "../../Posters/launch_pad.jpeg"

// JS code for posting into google sheets

window.onload=function(){
  var form = document.getElementById('sheetdb-form');
  form.addEventListener("submit", e => {
  
    e.preventDefault();
    fetch(form.action, {
        method : "POST",
        body: new FormData(document.getElementById("sheetdb-form")),
    }).then(
        response => response.json()
    ).then(() => {
      window.open( "/Applied", "_self");

    });
  
  });
}



const Apply=(props)=> {
  AOS.init({
    duration:1000,
    offset:100,
    delay:200
  });
  return <div className="apply">
      <div className="apply_wrapper" data-aos="zoom-in" data-aos-once="true"  >
          <h1 className="Apply_heading">Launch Pad</h1>
          <img className='launchpad' src={launch_pad}></img>
          <p className='content'>
         Follow the instructions given and fill the form below to register
          </p>
          <p className='note'>
            
              <ol>
                <li>Complete your Entry fee payment to buy your Laissez - passer (UPI number: +91 8667529628)</li>
                <li>Note the TransactionID</li>
                <li>Fill the form with correct details</li>
              </ol>
              
            
          </p>
      </div>
         
         {/* Form area */}

        <form action="https://sheetdb.io/api/v1/6dj9s537etzgz" method="post" id="sheetdb-form" className='form'  autoComplete="on" data-aos="zoom-in"
         data-aos-once="true"  >
          <div>
            <label for="Name">Name<span className='desc'>(In Caps, with initial)</span></label>
            <input type="text" placeholder='Enter your Full name' name="data[NAME]" />
          </div>
          <div>
            <label for="Roll number">Roll Number</label>
            <input type="text" placeholder='Enter your Roll number' name="data[ROLL NO]"  />
          </div>
          <div>
            <label for="Email">Email - personal</label>
            <input type="email" placeholder='Enter your personal Mail-Id' name="data[Email Address]" />
          </div>
          <div>
            <label for="Email">Email - GCT</label>
            <input type="email" placeholder='Enter your GCT Mail-Id' name="data[GCT MAIL ID]" />
          </div>
          <div>
            <label for="Number">Contact Number</label>
            <input type="text" minLength="10" maxLength="10" pattern="[0-9]{10}" placeholder='Enter your Contact number' name="data[CONTACT NUMBER]"  />
          </div>
          <div>
            <label for="Number">WhatsApp Number</label>
            <input type="text" minLength="10" maxLength="10" pattern="[0-9]{10}" placeholder='Enter your WhatsApp number' name="data[WHATSAPP NUMBER]"  />
          </div>
          <div>
           <label for="Year of study">Year of study</label>
            <select className='selection' name="data[YEAR]" >
              <option disabled="disabled" selected>select the current year of study</option>
              <option>2nd Year</option>
              <option>3rd Year</option>
              <option>4th Year</option>
            </select>
          </div>
          <div>
          <label for="Department">Department</label>
            {/* <input type="text" maxLength="20" placeholder="Enter the departmentof study" name="data[Department]"></input> */}
              <select className='selection' name="data[DEPARTMENT]" >
              <option disabled="disabled" selected>select the department</option>
              <option>CIVIL</option>
              <option>MECH</option>
              <option>PROD</option>
              <option>IBT</option>
              <option>EEE</option>
              <option>ECE</option>
              <option>EIE</option>
              <option>IT</option>
              <option>CSE</option>
            </select>
          </div>
          <div>
          <label for="Instagram handle ">Transaction ID</label>
            <input type="text" maxLength="100" placeholder="Enter the transaction ID of your payment" name="data[PAYMENT SCREENSHOT]"></input>
          </div>
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
            <button  type='submit' disabled>Apply</button>
          </div>
        </form>
  </div>;
}

export default Apply;