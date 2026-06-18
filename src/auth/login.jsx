import { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router";
import authService from "../services/authService";
import Button from "../components/Button.jsx";

function Login() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = async (event) => {

    event.preventDefault();

    try {

      const response =
        await authService.login(
          name,
          pass
        );

      if (response.success) {

        localStorage.setItem(
          "currentUser",
          JSON.stringify({
            name: name
          })
        );

        alert("Login Successful");

        navigate("/dashboard");

      } else {

        alert(
          response.message ||
          "Login Failed"
        );

      }

    } catch (error) {

      console.log(error);

      alert("Server Error");

    }

  };

  return (

    <div className="container">

      <div className="login-card">

        <h1>User Login</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Username"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) =>
              setPass(e.target.value)
            }
          />

          <div className="options">

            <label>

              <input type="checkbox" />

              Remember me

            </label>

          </div>

          <Button
            buttonText="LOGIN"
            type="submit"
          />

          <div className="signup-link">

            <span>
              Don't have an account?
            </span>

            <Link to="/signup">
              Sign Up
            </Link>

          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;