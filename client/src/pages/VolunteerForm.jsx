import React from "react";
import "../styles/VolunteerForm.css";

const VolunteerForm = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Volunteer Registration</h2>
      <form className="row g-3 p-4 shadow rounded bg-light">
        <div className="col-md-6">
          <label htmlFor="fullName" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="fullName" required />
        </div>

        <div className="col-md-6">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input type="email" className="form-control" id="email" required />
        </div>

        <div className="col-md-6">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input type="tel" className="form-control" id="phone" required />
        </div>

        <div className="col-md-6">
          <label htmlFor="location" className="form-label">City/Location</label>
          <input type="text" className="form-control" id="location" required />
        </div>

        <div className="col-12">
          <label htmlFor="interestArea" className="form-label">Area of Interest</label>
          <select className="form-select" id="interestArea" required>
            <option value="">Choose...</option>
            <option>Teaching</option>
            <option>Fundraising</option>
            <option>Event Planning</option>
            <option>Social Media</option>
            <option>Other</option>
          </select>
        </div>

        <div className="col-12">
          <label htmlFor="availability" className="form-label">Availability (Days & Hours)</label>
          <textarea className="form-control" id="availability" rows="3" required></textarea>
        </div>

        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary px-5 mt-3">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default VolunteerForm;
