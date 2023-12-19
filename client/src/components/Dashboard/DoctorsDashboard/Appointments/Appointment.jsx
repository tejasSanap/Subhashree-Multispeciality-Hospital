import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Table, Button } from "react-bootstrap";
import { doctorAtom, roleAtom } from "../../../../store/atom";
import { useAtom } from "jotai";
import axios from "../../../../utils/axiosConfig";

function Appointment() {
  const [doctor] = useAtom(doctorAtom);
  const [role] = useAtom(roleAtom);
  const [myAppointment, setMyAppointment] = useState([]);

  const fetchAppointment = async () => {
    if (role == "doctor") {
      const res = await axios.get("/api/appointment/getAppointments");
      const filteredAppointments = res.data.filter(
        (appt) => appt.doctorId === doctor._id
      );
      setMyAppointment(filteredAppointments);
    } else if (role == "admin") {
      const res = await axios.get("/api/appointment/getAppointments");
      const filteredAppointments = res.data;
      setMyAppointment(filteredAppointments);
    }
  };

  useEffect(() => {
    fetchAppointment();
  }, []);

  const handleApproveAppointment = async (appointmentId) => {
    try {
      const res = await axios.put(
        `/api/appointment/approveAppointment/${appointmentId}`,
        {
          status: "confirmed",
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Appointment-status":"confirmed",
          },
        }
      );
      fetchAppointment();
    } catch (error) {
      // Handle error if the API call fails
      console.error("Error approving appointment:", error);
    }
  };
  const handleRejectAppointment = async (appointmentId) => {
    try {
      const res = await axios.put(
        `/api/appointment/rejectAppointment/${appointmentId}`,
        {
          status: "rejected",
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Appointment-status":"rejected",
          },
        }
      );
      fetchAppointment();
    } catch (error) {
      // Handle error if the API call fails
      console.error("Error approving appointment:", error);
    }
  };

  return (
    <Container>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Patient Email</th>
            <th>Mobile No.</th>
            <th>Service</th>
            <th>Shift</th>
            <th>Date</th>
            <th>Description</th>
            <th>Status</th>
            {role == "admin" && <th>Doctor</th>}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {myAppointment.map((appointment, index) => (
            <tr key={index}>
              <td
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  textTransform: "capitalize",
                }}
              >{`${appointment.firstName} ${appointment.lastName}`}</td>
              <td
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  textTransform: "capitalize",
                }}
              >
                {appointment.age}
              </td>
              <td
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  textTransform: "capitalize",
                }}
              >
                {appointment.gender}
              </td>
              <td
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                }}
              >
                {appointment.patientEmail}
              </td>
              <td
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  textTransform: "capitalize",
                }}
              >
                {appointment.mobileNumber}
              </td>
              <td
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  textTransform: "capitalize",
                }}
              >
                {appointment.service}
              </td>
              <td
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  textTransform: "capitalize",
                }}
              >
                {appointment.shift}
              </td>
              <td
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  textTransform: "capitalize",
                }}
              >
                {new Date(appointment.date).toLocaleString()}
              </td>
              <td
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  textTransform: "capitalize",
                }}
              >
                {appointment.description}
              </td>
              <td
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  textTransform: "capitalize",
                }}
              >
                {appointment.status}
              </td>
              {role == "admin" && <td>{appointment.doctor}</td>}
              <td>
                <Button
                  style={{
                    color: "#fff",
                    backgroundColor: "#24b9be",
                    border: "none",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                  // variant="primary"
                  onClick={() => handleApproveAppointment(appointment._id)}
                >
                  Approve
                </Button>
              </td>
              <td>
                <Button
                  style={{
                    color: "#fff",
                    backgroundColor: "#d14836",
                    border: "none",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                  // variant="primary"
                  onClick={() => handleRejectAppointment(appointment._id)}
                >
                  Reject
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Appointment;
