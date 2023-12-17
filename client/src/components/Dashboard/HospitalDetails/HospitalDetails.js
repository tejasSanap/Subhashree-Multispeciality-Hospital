import React, { useState, useEffect } from "react";
import { Card, Button, Form } from "react-bootstrap";
import axios from "../../../utils/axiosConfig";

const HospitalDetails = () => {
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const [hospital, setHospital] = useState([]);

  const fetchHospitalDetails = async () => {
    const res = await axios.get("/api/hospital/gethospital");
    setHospital(res.data[0]);
  };

  useEffect(() => {
    fetchHospitalDetails();
  }, []);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancel = () => {
    setEditing(false);
    setFormData({ ...hospital });
  };

  const handleSave = () => {
    // Send a PUT request to update the hospital details
    console.log(formData);
    axios
      .put(`/api/hospital/updateHospital/${hospital._id}`, formData)
      .then((response) => {
        setEditing(false);
      })
      .catch((error) => {
        console.error("Error updating hospital details:", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Card>
      <Card.Body>
        {editing ? (
          <div>
            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={formData?.address}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formMondayToFriday">
              <Form.Label>Monday to Friday</Form.Label>
              <Form.Control
                type="text"
                name="mondayToFriday"
                value={formData?.mondayToFriday}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formSaturday">
              <Form.Label>Saturday</Form.Label>
              <Form.Control
                type="text"
                name="saturday"
                value={formData?.saturday}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formSunday">
              <Form.Label>Sunday</Form.Label>
              <Form.Control
                type="text"
                name="sunday"
                value={formData?.sunday}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formAwardsWon">
              <Form.Label>Awards Won</Form.Label>
              <Form.Control
                type="number"
                name="awardsWon"
                value={formData?.awardsWon}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formSatisfiedPatient">
              <Form.Label>Satisfied Patients</Form.Label>
              <Form.Control
                type="number"
                name="satisfiedPatient"
                value={formData?.satisfiedPatient}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formNumber">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="number"
                name="number"
                value={formData?.number}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData?.email}
                onChange={handleChange}
              />
            </Form.Group>
          </div>
        ) : (
          <div>
            <Card.Title>Address: {hospital?.address}</Card.Title>
            <Card.Text>
              <Card.Subtitle className="mb-3 text-muted">
                Monday to Friday: {hospital?.mondayToFriday}
              </Card.Subtitle>
              <Card.Subtitle className="mb-3 text-muted">
                Saturday: {hospital?.saturday}
              </Card.Subtitle>
              <Card.Subtitle className="mb-3 text-muted">
                Sunday: {hospital?.sunday}
              </Card.Subtitle>
            </Card.Text>
            <Card.Text>Awards Won: {hospital?.awardsWon}</Card.Text>
            <Card.Text>
              Satisfied Patients: {hospital?.satisfiedPatient}
            </Card.Text>
            <Card.Text>Contact Number: {hospital?.number}</Card.Text>
            <Card.Text>Email: {hospital?.email}</Card.Text>
          </div>
        )}
      </Card.Body>
      <Card.Footer>
        {editing ? (
          <div>
            <Button
              variant="primary"
              style={{ marginRight: "5px" }}
              onClick={handleSave}
            >
              Save
            </Button>
            <Button variant="secondary" onClick={handleCancel}>
              Cancel
            </Button>
          </div>
        ) : (
          <Button variant="info" onClick={handleEdit}>
            Edit
          </Button>
        )}
      </Card.Footer>
    </Card>
  );
};

export default HospitalDetails;
