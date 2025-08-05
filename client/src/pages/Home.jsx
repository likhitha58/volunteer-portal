import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Welcome to the Internship Portal</h1>
    <Link to="/register">Register</Link> | <Link to="/admin">Admin View</Link>
  </div>
);

export default Home;
