import "./Profile.css";
import { useState } from "react";

function Profile() {

  const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};

  const [editing, setEditing] = useState(false);

  const [user, setUser] = useState({
    name:     currentUser.name     || "",
    dob:      currentUser.dob      || "",
    email:    currentUser.email    || "",
    username: currentUser.username || currentUser.name || ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Persist updated profile back to localStorage
    localStorage.setItem("currentUser", JSON.stringify({ ...currentUser, ...user }));
    setEditing(false);
  };

  return (
    <div className="profile-container">

      <div className="profile-card">

        <div className="profile-top">
          <div className="profile-img-wrapper">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="profile"
              className="profile-img"
            />
          </div>

          <h1>My Profile</h1>

          <p className="subtitle">
            {user.email || "Manage your account details"}
          </p>
        </div>

        <div className="profile-details">

          <div className="detail-box">
            <label>Name</label>
            {editing
              ? <input type="text"  name="name"     value={user.name}     onChange={handleChange} placeholder="Your name" />
              : <p>{user.name || "—"}</p>
            }
          </div>

          <div className="detail-box">
            <label>Username</label>
            {editing
              ? <input type="text"  name="username" value={user.username} onChange={handleChange} placeholder="Username" />
              : <p>{user.username || "—"}</p>
            }
          </div>

          <div className="detail-box">
            <label>Email</label>
            {editing
              ? <input type="email" name="email"    value={user.email}    onChange={handleChange} placeholder="Email address" />
              : <p>{user.email || "—"}</p>
            }
          </div>

          <div className="detail-box">
            <label>Date of Birth</label>
            {editing
              ? <input type="date"  name="dob"      value={user.dob}      onChange={handleChange} />
              : <p>{user.dob || "—"}</p>
            }
          </div>

        </div>

        {editing
          ? (
            <button className="edit-btn" onClick={handleSave}>
              ✓ Save Profile
            </button>
          )
          : (
            <button className="edit-btn" onClick={() => setEditing(true)}>
              ✏️ Edit Profile
            </button>
          )
        }

      </div>

    </div>
  );
}

export default Profile;
