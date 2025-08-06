import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VolunteerForm from "./pages/VolunteerModal";
import AdminLogin from "./pages/AdminLogin";
import AdminPanel from "./pages/AdminPanel"
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/volunteer-form" element={<VolunteerForm />} />
      <Route path="/admin" element={<AdminLogin />} />
    <Route path="/admin-panel" element={<AdminPanel />} />
    </Routes>
  );
};

export default App;
