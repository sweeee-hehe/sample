import { useState } from "react";
import "./signup.css";
import authService from "../services/authService.js";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import Button from "../components/Button.jsx";

function Signup() {
  const navigate = useNavigate();
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
  const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const response = await authService.signup(
      mail,
      name,
      pass
    );

    console.log(response);

    if (response.success) {
      alert("Signup Successful!");
      navigate("/Login");
    }
  } catch (error) {
    console.log(error);
  }
};
  return (
    <div className="container">
      <div className="login-card">

        <h1>User SignUp</h1>
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
        <Button buttonText={'SIGNUP'} type={'submit'} />
        </form>
      </div>
    </div>
  );
}

export default Signup;