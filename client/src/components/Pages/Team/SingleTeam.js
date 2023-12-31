import React, { useEffect, useState } from "react";
import { Col, Container, NavLink, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { useGetDoctorsQuery } from '../../../features/sigmaApi';
import axios from "../../../utils/axiosConfig";

const SingleTeam = () => {
  const [doctorsCollection, setDoctorsCollection] = useState([]);
  useEffect(() => {
    const fetchDoctors = async () => {
      const res = await axios.get("/api/doctor/getAllDoctors");
      setDoctorsCollection(res);
    };
    fetchDoctors();
  }, []);
  return (
    <Container>
      <Row>
        <div className="title text-center">
          <h6 style={{ color: "#2779a7" }}>Doctors</h6>
          <h3>Best Specialist Doctors</h3>
        </div>
      </Row>
      <Row xs={1} sm={1} md={2} lg={3}>
        {doctorsCollection?.data?.map((doctor) => (
          <Col key={doctor._id}>
            <div className="card my-doctor doctor-card my-3">
              <img
                src={doctor?.photo}
                className="card-img"
                alt="..."
              />
              <div className="row card-img-overlay">
                <div className="mt-auto text-center  about-doctor">
                  <h2>
                    <Link
                      to={`/singleDoctor/${doctor?._id}`}
                      className="text-decoration-none"
                    >
                      {doctor?.name}
                    </Link>
                  </h2>
                  <h5>{doctor?.title}</h5>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SingleTeam;
