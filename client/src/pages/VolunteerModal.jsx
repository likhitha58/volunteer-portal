import React from "react";
import { Modal, Button, Form, Row, Col, Table } from "react-bootstrap";
import "../styles/VolunteerForm.css"; // Make sure this exists

const VolunteerModal = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered scrollable style={{background:'transparent'}}>
      <Modal.Header closeButton>
        <Modal.Title style={{color:'white'}}>Volunteer Registration Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="glass-form p-4">
          <p  style={{color:'#ffffff7c'}}>
            Let's know your area of interest to volunteer. We’ll get back to you soon with updates upon receiving this form.
          </p>

          <Form>
            {/* Full Name */}
            <Row className="mb-3">
              <Form.Group as={Col} controlId="firstName">
                <Form.Label>Full Name <span className="text-danger">*</span></Form.Label>
                <Form.Control type="text" placeholder="First Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="lastName">
                <Form.Label>&nbsp;</Form.Label>
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>
            </Row>

            {/* Address */}
            <Form.Group className="mb-3" controlId="streetAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Street Address" className="mb-2" />
              <Form.Control type="text" placeholder="Street Address Line 2" className="mb-2" />
              <Row>
                <Col><Form.Control type="text" placeholder="City" className="mb-2" /></Col>
                <Col><Form.Control type="text" placeholder="State / Province" className="mb-2" /></Col>
              </Row>
              <Form.Control type="text" placeholder="Postal / Zip Code" />
            </Form.Group>

            {/* Email */}
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>E-mail <span className="text-danger">*</span></Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            {/* Phone Number */}
            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Phone Number <span className="text-danger">*</span></Form.Label>
              <Form.Control type="tel" placeholder="(000) 000-0000" />
            </Form.Group>

            {/* Area of Volunteering */}
            <Form.Group className="mb-4">
              <Form.Label>Preferences in Area of Volunteering</Form.Label>
              <Table bordered responsive style={{backgroundColor:'transparent !important'}}>
                <thead >
                  <tr className="text-center">
                    <th></th>
                    <th>Would love to!</th>
                    <th>Would like to.</th>
                    <th>Wouldn’t mind helping.</th>
                    <th>Not this area.</th>
                  </tr>
                </thead>
                <tbody>
                  {["T-Shirts", "Ticket Sales", "Raffle Ticket Sales", "Traffic/ Parking", "Clean-Up/ Grounds"].map((item, rowIndex) => (
                    <tr key={rowIndex}>
                      <td>{item}</td>
                      {[0, 1, 2, 3].map((col) => (
                        <td className="text-center" key={col}>
                          <Form.Check type="radio" name={`volunteer-${rowIndex}`} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Form.Group>

            {/* Shifts */}
            <Form.Group className="mb-4">
              <Form.Label>Preferences in Shifts</Form.Label>
              <Table bordered responsive>
                <thead>
                  <tr className="text-center">
                    <th></th>
                    <th>8am–1pm</th>
                    <th>1pm–6pm</th>
                    <th>6pm–11pm</th>
                  </tr>
                </thead>
                <tbody>
                  {["Best time for me.", "Not Available"].map((label, index) => (
                    <tr key={index}>
                      <td>{label}</td>
                      {[0, 1, 2].map((slot) => (
                        <td className="text-center" key={slot}>
                          <Form.Check type="checkbox" />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Form.Group>

            {/* Comments */}
            <Form.Group className="mb-3" controlId="comments">
              <Form.Label>Any Special Comments</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary">
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default VolunteerModal;
