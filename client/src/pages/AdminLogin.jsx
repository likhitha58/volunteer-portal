// src/pages/AdminLogin.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/adminLogin.css";
import Navbar from "../components/Navbar";

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (credentials.username === "admin" && credentials.password === "admin123") {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin-panel");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      <Navbar />
      <div className="admin-login-wrapper">
        <form className="glass-form" onSubmit={handleLogin}>
          <h2 className="form-title">Admin Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default AdminLogin;
