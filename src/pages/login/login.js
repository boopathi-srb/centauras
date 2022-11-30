import React, { useState } from "react";
import "../apply/apply.css";
import AOS from "aos";
import coming_soon from "../../icons/Coming soon.png";
import "aos/dist/aos.css";
import launch_pad from "../../Posters/launch_pad.jpeg";
// import DotLoader from "./loader";
import { useNavigate } from "react-router-dom";
import { post } from "jquery";

// JS code for posting into google sheets

const Login = (props) => {
  AOS.init({
    duration: 1000,
    offset: 100,
    delay: 200,
  });
  // const[load, setload]=useState(false)
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:6030/user/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (data.status === "SUCCESS") {
      localStorage.setItem("User", data.data[0].name);
      window.location.reload();
      navigate("/");
      
    } else {
      alert("wrong user credentials");
    }
  };

  return (
    <div className="apply">
      {/* <img src={coming_soon} alt="coming soon" data-aos="zoom-in" data-aos-once="true"/> */}
      <div className="apply_wrapper" data-aos="zoom-in" data-aos-once="true">
        <h1 className="Apply_heading">Sign-In</h1>
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
          <p>Not an user?</p>
          <p onClick={() => navigate("/apply")}>Sign Up here!</p>
        </div>
        <div>
          <input type="submit" className="button" value={"Sign in"}></input>
        </div>
      </form>
    </div>
  );
};

export default Login;
