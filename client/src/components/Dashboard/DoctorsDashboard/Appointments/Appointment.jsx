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
        `/api/appointment/updateappointment/${appointmentId}`,
        {
          status: "confirmed",
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
            <th>Mobile Number</th>
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
              <td>{`${appointment.firstName} ${appointment.lastName}`}</td>
              <td>{appointment.age}</td>
              <td>{appointment.gender}</td>
              <td>{appointment.patientEmail}</td>
              <td>{appointment.mobileNumber}</td>
              <td>{appointment.service}</td>
              <td>{appointment.shift}</td>
              <td>{new Date(appointment.date).toLocaleString()}</td>
              <td>{appointment.description}</td>
              <td>{appointment.status}</td>
              {role == "admin" && <td>{appointment.doctor}</td>}
              <td>
                <Button
                  style={{ color: "#fff", backgroundColor: "#2779a7" }}
                  variant="primary"
                  onClick={() => handleApproveAppointment(appointment._id)}
                >
                  Approve
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
