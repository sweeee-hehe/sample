import "./login.css";

function Login() {
  return (
    <div className="container">
      <div className="login-card">

        <h1>User Login</h1>

        <input
          type="text"
          placeholder="User name"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <div className="options">
          <label>
            <input type="checkbox" />
            Remember me
          </label>

          <a href=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWfTVS_UnPbH8QyW68cmSFSupC3lgy2DwDUA&s">Forgot password?</a>
        </div>

        <button>LOGIN</button>

      </div>
    </div>
  );
}

export default Login;