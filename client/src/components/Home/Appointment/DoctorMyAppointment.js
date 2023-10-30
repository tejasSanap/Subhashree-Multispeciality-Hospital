import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, ListGroup } from 'react-bootstrap';
import axios from '../../../utils/axiosConfig';
import { useAtom } from 'jotai';
import { adminAtom, userAtom } from '../../../store/atom';

function MyAppointment() {
    const [admin] = useAtom(adminAtom);
    const [myAppointment, setMyAppointment] = useState([]);
    const fetchAppointment = async () => {
        const res = await axios.get("/api/appointment/getAppointments");
        console.log("res", res.data);
        let abc = res.data.filter((appt) => {
            return appt.doctorId == admin.id;
        })
        console.log("abc", abc);
        setMyAppointment(abc)
    }
    useEffect(() => {
        fetchAppointment();
    }, [])

    return (
        <Container>
            {myAppointment.map((myAppointment, index) => (
                <Card key={index} className="my-3">
                    <Card.Body>
                        <Card.Title>Appointment Details</Card.Title>
                        <ListGroup variant="flush">
                            <ListGroup.Item>FName: {myAppointment.firstName} {myAppointment.lastName}</ListGroup.Item>
                            <ListGroup.Item>Age: {myAppointment.age} Gender: {myAppointment.gender} </ListGroup.Item>
                            <ListGroup.Item>Patient Email: {myAppointment.patientEmail}</ListGroup.Item>
                            <ListGroup.Item>Mobile Number: {myAppointment.mobileNumber}</ListGroup.Item>
                            <ListGroup.Item>Service: {myAppointment.service}</ListGroup.Item>
                            <ListGroup.Item>Shift: {myAppointment.shift}</ListGroup.Item>
                            <ListGroup.Item>Date: {new Date(myAppointment.date).toLocaleString()}</ListGroup.Item>
                            <ListGroup.Item>Description: {myAppointment.description}</ListGroup.Item>
                            <ListGroup.Item>Status: {myAppointment.status}</ListGroup.Item>
                            <ListGroup.Item>Doctor: {myAppointment.doctor}</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
            ))}
        </Container>
    );
}

export default MyAppointment;
