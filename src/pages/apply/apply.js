import React from 'react';
import  './apply.css';
import AOS from 'aos';
import "aos/dist/aos.css"

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
    duration:1000
  });
  return <div className="apply">
      <div className="apply_wrapper" data-aos="zoom-out"data-aos-once="true"  data-aos-delay="400">
          <h1 className="Contact_heading">Apply for membership</h1>
          <p className='content'>
         Fill the form below to register
          </p>
      </div>
         
         {/* Form area */}

        <form action="" method="post" id="sheetdb-form" className='form'  autoComplete="on" data-aos="zoom-out"data-aos-once="true"  data-aos-delay="400">
          <div>
            <label for="Name">Name</label>
            <input type="text" placeholder='Enter your Full name' name="data[Name]" />
          </div>
          <div>
            <label for="Roll number">Roll Number</label>
            <input type="text" placeholder='Enter your Roll number' name="data[Roll number]"  />
          </div>
          <div>
            <label for="Email">Email - personal</label>
            <input type="email" placeholder='Enter your personal Mail-Id' name="data[Email-personal]" />
          </div>
          <div>
            <label for="Email">Email - GCT</label>
            <input type="email" placeholder='Enter your GCT Mail-Id' name="data[Email-GCT]" />
          </div>
          <div>
            <label for="Number">Contact Number</label>
            <input type="text" minLength="10" maxLength="10" pattern="[0-9]{10}" placeholder='Enter your Contact number' name="data[Contact Number]"  />
          </div>
          <div>
           <label for="Year of study">Year of study</label>
            <select className='selection' name="data[Year of study]" >
              <option disabled="disabled" selected>select the current year of study</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div>
          <label for="Department">Department</label>
            <input type="text" maxLength="20" placeholder="Enter the departmentof study" name="data[Required theme]"></input>
          </div>
          <div>
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
            <button  type='submit' >Apply</button>
          </div>
        </form>
  </div>;
}

export default Apply;