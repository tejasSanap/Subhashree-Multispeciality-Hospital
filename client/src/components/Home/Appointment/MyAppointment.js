import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, ListGroup, Nav, Row, Col } from "react-bootstrap";
import TabPane from "react-bootstrap/TabPane";
import TabContent from "react-bootstrap/TabContent";
import axios from "../../../utils/axiosConfig";
import { useAtom } from "jotai";
import { userAtom } from "../../../store/atom";

function MyAppointment() {
  const [user] = useAtom(userAtom);
  const [myAppointments, setMyAppointments] = useState([]);
  const [pendingAppointments, setPendingAppointments] = useState([]);
  const [confirmedAppointments, setConfirmedAppointments] = useState([]);
  const [rejectedAppointments, setRejectedAppointments] = useState([]);
  const [activeKey, setActiveKey] = useState("pending");

  const fetchAppointments = async () => {
    const res = await axios.get("/api/appointment/getAppointments");

    const userAppointments = res.data.filter(
      (appt) => appt.patientId === user.id
    );
    setMyAppointments(userAppointments);
    console.log("appts", myAppointments);

    const pending = userAppointments.filter(
      (appt) => appt.status === "pending"
    );
    setPendingAppointments(pending);
    console.log("pend", pendingAppointments);
    const confirmed = userAppointments.filter(
      (appt) => appt.status === "confirmed"
    );
    setConfirmedAppointments(confirmed);

    const rejected = userAppointments.filter(
      (appt) => appt.status === "rejected"
    );
    setRejectedAppointments(rejected);
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleTabSelect = (selectedKey) => {
    setActiveKey(selectedKey);
  };

  const renderAppointments = (appointments) => {
    return (
      <>
        {appointments.map((myAppointment, index) => (
          <Row>
            {appointments.map((myAppointment, index) => (
              <Col key={index} md={6}>
                <Card className="my-2">
                  <Card.Body>
                    {/* <Card.Title>Appointment {index + 1}</Card.Title> */}
                    <ListGroup variant="flush">
                      <p>
                        <strong>Full Name:</strong> {myAppointment.firstName}{" "}
                        {myAppointment.lastName}
                      </p>
                      <p>
                        <strong>Age:</strong> {myAppointment.age}
                      </p>
                      <p>
                        <strong> Gender:</strong>
                        {myAppointment.gender}
                      </p>
                      <p>
                        <strong>Patient Email:</strong>{" "}
                        {myAppointment.patientEmail}
                      </p>
                      <p>
                        <strong>Mobile Number:</strong>{" "}
                        {myAppointment.mobileNumber}
                      </p>
                      <p>
                        <strong>Service:</strong> {myAppointment.service}
                      </p>
                      <p>
                        <strong>Shift:</strong> {myAppointment.shift}
                      </p>
                      <p>
                        <strong>Date:</strong>{" "}
                        {new Date(myAppointment.date).toLocaleString()}
                      </p>
                      <p>
                        <strong>Description:</strong>{" "}
                        {myAppointment.description}
                      </p>
                      <p>
                        <strong>Status:</strong> {myAppointment.status}
                      </p>
                      <p>
                        <strong>Doctor:</strong> {myAppointment.doctor}
                      </p>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ))}
      </>
    );
  };

  return (
    <Container>
      <Nav variant="underline" defaultActiveKey="pending">
        <Nav.Item>
          <Nav.Link
            eventKey="pending"
            onClick={() => {
              setActiveKey("pending");
            }}
            style={{ color: "black" }}
          >
            Pending
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="confirmed"
            onClick={() => {
              setActiveKey("confirmed");
            }}
            style={{ color: "green" }}
          >
            Confirmed
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="rejected"
            onClick={() => {
              setActiveKey("rejected");
            }}
            style={{ color: "red" }}
          >
            Rejected
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="mt-3">
        <TabContent>
          {activeKey === "pending" && renderAppointments(pendingAppointments)}
          {activeKey === "confirmed" &&
            renderAppointments(confirmedAppointments)}
          {activeKey === "rejected" && renderAppointments(rejectedAppointments)}
        </TabContent>
      </div>
    </Container>
  );
}

export default MyAppointment;
