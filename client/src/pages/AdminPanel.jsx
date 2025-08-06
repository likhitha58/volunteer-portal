import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import "../styles/admin.css";

const AdminDashboard = () => {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/admin/applicants");
        setApplicants(res.data);
      } catch (err) {
        console.error("Error fetching applicants:", err);
      }
    };

    fetchApplicants();
  }, []);

  return (
    <div className="admin-dashboard">
      <Navbar />
      <div className="dashboard-content">
        <br />
        <h2>Applicants List</h2>
        <div className="glass-table-wrapper">
          <table className="glass-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Volunteer Preferences</th>
                <th>Shift Preferences</th>
                <th>Comments</th>
              </tr>
            </thead>
            <tbody>
              {applicants.map((app, index) => (
                <tr key={index}>
                  <td>{app.firstName} {app.lastName}</td>
                  <td>{app.email}</td>
                  <td>{app.phone}</td>
                  <td>
                    {app.address?.street}<br />
                    {app.address?.streetLine2 && (<>{app.address.streetLine2}<br /></>)}
                    {app.address?.city}, {app.address?.state} - {app.address?.postalCode}
                  </td>
                  <td>
                    {app.volunteeringPreferences && Object.entries(app.volunteeringPreferences).map(([area, level], i) => (
                      <div key={i}>{area}: {["Would love to!", "Would like to.", "Wouldn’t mind helping.", "Not this area."][level]}</div>
                    ))}
                  </td>
                  <td>
                    <strong>Best Time:</strong> {app.shiftPreferences?.bestTime?.join(", ") || "None"}<br />
                    <strong>Not Available:</strong> {app.shiftPreferences?.notAvailable?.join(", ") || "None"}
                  </td>
                  <td>{app.comments}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
