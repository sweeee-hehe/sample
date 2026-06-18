import "./Layout.css";
import { Link, Outlet } from "react-router";

function Layout() {

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
  };

  return (
    <div className="layout">

      <div id="navbar">

        <div className="logo">
          MERN APP
        </div>

        <div className="nav-links">
          <Link to="/home">Home</Link>

          <Link to="/dashboard">
            Dashboard
          </Link>

          <Link to="/profile">
            Profile
          </Link>

          <Link to="/login"  onClick={handleLogout}>
            Logout
          </Link>
        </div>

      </div>

      <div className="content">
        <Outlet />
      </div>

    </div>
  );
}

export default Layout;