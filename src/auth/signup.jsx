import { useState } from "react";
import "./signup.css";
import authService from "../services/authService.js";

function Signup() {
  const [name, setName]=useState('');

  const handleName=(event)=>{
    setName(event.target.value);
  }

  // console.log(name);

  const [pass, setPass]=useState('');

  const handlePass=(event)=>{
    setPass(event.target.value);
  }

  const [mail, setMail]=useState('');

  const handleMail=(event)=>{
    setMail(event.target.value);
  }
  
  // console.log(pass);
  const handleSubmit=(event)=>{
    event.preventDefault()
    authService.signup(mail,name,pass)
  }
  return (
    <div className="container">
      <div className="login-card">

        <h1>User Login</h1>
        <form onSubmit={handleSubmit}>
         <input
          type="email"
          placeholder="Email" onChange={handleMail}
        />
        <input
          type="text"
          placeholder="User name" onChange={handleName}
        />

        <input
          type="password"
          placeholder="Password" onChange={handlePass}
        />

        <div className="options">
          <label>
            <input type="checkbox" />
            Remember me
          </label>

          {/* <a href=" https://media.tenor.com/cRTQk6N_FxMAAAAe/swag-cat-swagbilli-cutecat-cats-cat-swag-ok-yooo-yo.png">Forgot password?</a> */}
        </div>

        <button type="submit">SIGN UP</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;