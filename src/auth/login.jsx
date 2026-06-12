import { useState } from "react";
import "./login.css";
import authService from "../services/authService";
import { Link } from "react-router";

function Login() {
  const [name, setName]=useState('');

  const handleName=(event)=>{
    setName(event.target.value);
  }

  // console.log(name);

  const [pass, setPass]=useState('');

  const handlePass=(event)=>{
    setPass(event.target.value);
  }
  
  // console.log(pass);
  const handleSubmit=(event)=>{
    event.preventDefault()
    authService.login(name,pass)
  }
  return (
    <div className="container">
      <div className="login-card">

        <h1>User Login</h1>
        <form onSubmit={handleSubmit}>
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

          <a href=" https://media.tenor.com/cRTQk6N_FxMAAAAe/swag-cat-swagbilli-cutecat-cats-cat-swag-ok-yooo-yo.png">Forgot password?</a>
        </div>

        <button type="submit">LOGIN</button>
        <label class='sign'>Dont have an account?</label>
        <Link to='/Signup'>Sign Up</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;