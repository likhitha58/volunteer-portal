// VolunteerModal.jsx
import React, { useState } from "react";
import { Modal, Button, Form, Row, Col, Table } from "react-bootstrap";
import axios from "axios";
import "../styles/VolunteerForm.css";

const volunteerAreas = [
  "T-Shirts",
  "Ticket Sales",
  "Raffle Ticket Sales",
  "Traffic / Parking",
  "Clean‑Up / Grounds"
];

const shifts = ["8am‑1pm", "1pm‑6pm", "6pm‑11pm"];
const preferenceLevels = [
  { label: "Would love to!", value: 0 },
  { label: "Would like to.", value: 1 },
  { label: "Wouldn’t mind helping.", value: 2 },
  { label: "Not this area.", value: 3 }
];

const VolunteerModal = ({ show, onHide }) => {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "",
    addressLine1: "", addressLine2: "", city: "", state: "", zip: "",
    email: "", phone: "",
    volunteerPrefs: {}, shiftPrefs: {}, comments: ""
  });

  const handleInput = e => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleVolunteerPref = (area, val) => {
    setFormData(prev => ({
      ...prev,
      volunteerPrefs: { ...prev.volunteerPrefs, [area]: val }
    }));
  };

  const handleShiftPref = (shift, type) => {
    setFormData(prev => ({
      ...prev,
      shiftPrefs: {
        ...prev.shiftPrefs,
        [shift]: { ...(prev.shiftPrefs[shift] || {}), [type]: !((prev.shiftPrefs[shift] || {})[type]) }
      }
    }));
  };

  const handleSubmit = async () => {
    // transform shift prefs to arrays
    const bestTime = Object.entries(formData.shiftPrefs)
                     .filter(([_, v]) => v["Best time"])
                     .map(([s]) => s);
    const notAvailable = Object.entries(formData.shiftPrefs)
                          .filter(([_, v]) => v["Not available"])
                          .map(([s]) => s);

    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      address: {
        street: formData.addressLine1,
        streetLine2: formData.addressLine2,
        city: formData.city,
        state: formData.state,
        postalCode: formData.zip
      },
      email: formData.email,
      phone: formData.phone,
      volunteeringPreferences: formData.volunteerPrefs,
      shiftPreferences: { bestTime, notAvailable },
      comments: formData.comments
    };

    console.log("Submitting", payload);
    try {
      await axios.post("http://localhost:5000/api/applicants", payload);
      alert("Submitted successfully!");
      onHide();
    } catch (err) {
      console.error("Submission failed:", err);
      alert("Submission failed");
    }
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered scrollable>
      <Modal.Header closeButton>
        <Modal.Title style={{color:'white'}}>Volunteer Registration</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="glass-form p-4" style={{maxWidth:'100%'}}>
          <Form >
            <Row className="mb-3">
              <Form.Group as={Col} controlId="firstName">
                <Form.Label style={{color:'white'}}>First Name *</Form.Label>
                <Form.Control type="text" value={formData.firstName} onChange={handleInput} required/>
              </Form.Group>
              <Form.Group as={Col} controlId="lastName">
                <Form.Label style={{color:'white'}}>Last Name</Form.Label>
                <Form.Control type="text" value={formData.lastName} onChange={handleInput}/>
              </Form.Group>
            </Row>

            <Form.Group controlId="addressLine1" className="mb-3">
              <Form.Label style={{color:'white'}}>Street Address *</Form.Label>
              <Form.Control type="text" value={formData.addressLine1} onChange={handleInput} required/>
              <br></br>
              <Form.Control id="addressLine2" type="text" placeholder="Address Line 2" value={formData.addressLine2} onChange={handleInput}/>
            </Form.Group>

            <Row className="mb-3">
              <Col>
                <Form.Control id="city" placeholder="City" className="mb-2" value={formData.city} onChange={handleInput}/>
              </Col>
              <Col>
                <Form.Control id="state" placeholder="State" className="mb-2" value={formData.state} onChange={handleInput}/>
              </Col>
              <Col>
                <Form.Control id="zip" placeholder="Postal Code" value={formData.zip} onChange={handleInput}/>
              </Col>
            </Row>

            <Form.Group controlId="email" className="mb-3">
              <Form.Label style={{color:'white'}}>Email *</Form.Label>
              <Form.Control type="email" value={formData.email} onChange={handleInput} required/>
            </Form.Group>
            <Form.Group controlId="phone" className="mb-3">
              <Form.Label style={{color:'white'}}>Phone *</Form.Label>
              <Form.Control type="tel" value={formData.phone} onChange={handleInput} required/>
            </Form.Group>

            <Form.Label style={{color:'white'}}>Volunteer Preferences</Form.Label>
            <Table bordered responsive className="mb-4">
              <thead>
                <tr>
                  <th>Area</th>
                  {preferenceLevels.map(p => <th key={p.value}>{p.label}</th>)}
                </tr>
              </thead>
              <tbody>
                {volunteerAreas.map((area, idx) =>
                  <tr key={idx}>
                    <td>{area}</td>
                    {preferenceLevels.map(p =>
                      <td key={p.value} className="text-center">
                        <Form.Check type="radio"
                          name={`vol-${idx}`}
                          checked={formData.volunteerPrefs[area] === p.value}
                          onChange={() => handleVolunteerPref(area, p.value)}
                        />
                      </td>
                    )}
                  </tr>
                )}
              </tbody>
            </Table>

            <Form.Label style={{color:'white'}}>Shift Preferences</Form.Label>
            <Table bordered responsive className="mb-4">
              <thead>
                <tr>
                  <th></th>
                  {shifts.map((s, i) => <th key={i}>{s}</th>)}
                </tr>
              </thead>
              <tbody>
                {["Best time", "Not available"].map((label, ri) =>
                  <tr key={ri}>
                    <td>{label}</td>
                    {shifts.map((s, ci) =>
                      <td key={ci} className="text-center">
                        <Form.Check type="checkbox"
                          checked={formData.shiftPrefs[s]?.[label] || false}
                          onChange={() => handleShiftPref(s, label)}
                        />
                      </td>
                    )}
                  </tr>
                )}
              </tbody>
            </Table>

            <Form.Group controlId="comments" className="mb-3">
              <Form.Label style={{color:'white'}}>Comments / Questions</Form.Label>
              <Form.Control as="textarea" rows={3} value={formData.comments} onChange={handleInput}/>
            </Form.Group>
          </Form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Cancel</Button>
        <Button variant="primary" onClick={handleSubmit}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default VolunteerModal;
